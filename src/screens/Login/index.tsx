import React from "react"
import { ActivityIndicator, Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { StatusBar } from "expo-status-bar"
import { gql, useMutation } from "@apollo/client"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import * as S from "./styles"
import { COLOR } from "../../globalStyles"
import InputDefault from "../../component/InputDefault"
import LabelInput from "../../component/LabelInput"
import ButtonDefault from "../../component/ButtonDefault"
import { loginDashboardGQL } from "../../service/queries-mutations"
import { loginScheme } from "../../schemeValidation/SchemeLogin"

type LoginSchemeType = z.infer<typeof loginScheme>

const Login = () => {
  const navigation = useNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemeType>({
    resolver: zodResolver(loginScheme),
  })

  //LOGIN DO USUARIO
  const LOGIN = gql`
    ${loginDashboardGQL}
  `
  const [loginMutation, { loading }] = useMutation(LOGIN)
  //---------------------------------------------------------------------------

  const setAsyncStorage = async (data: any) => {
    try {
      const jsonUser = JSON.stringify(data.login.data)

      await AsyncStorage.setItem("AUTH_USER", jsonUser)
      await AsyncStorage.setItem("AUTH_TOKEN", data.login.data.token)
    } catch (error) {
      console.log("Erro no async:", error)
      Alert.alert("ERROR", "Houve um erro ao inserir dados no AsyncStorage!")
    }
  }

  //EFETUA A CHAMADA DO MUTATION PARA FAZER O LOGIN
  const submitForm = (data: LoginSchemeType) => {
    if (data) {
      loginMutation({
        variables: {
          email: data.email,
          password: data.password,
        },
        onCompleted(data) {
          if (data) {
            if (data.login?.status == "error") {
              switch (data.login?.error) {
                case "user_not_found":
                  Alert.alert("ERROR", "Usuário não encontrado!")
                  break
                case "wrong_password":
                  Alert.alert("ERROR", "Senha Inváida!")
                  break
                default:
                  Alert.alert("ERROR", "Houve um Erro ao efetuar o login!")
                  break
              }
            } else {
              setAsyncStorage(data)
              Alert.alert("SUCESSO", "Logado com sucesso!")
              console.log("LOGADO:", data)
              navigation.navigate("Home")
            }
          }
        },
        onError(error) {
          if (error) {
            Alert.alert("ERROR", "Houve um erro ao efeturar o login!")
            console.log("ERRROR:", error)
          }
        },
      })
    }
  }

  return (
    <S.Container>
      <S.TitleText>Login</S.TitleText>

      <S.BoxInputsLogin>
        <S.BoxInput>
          <LabelInput>Email:</LabelInput>

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputDefault
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                autoCapitalize="none"
                onMessageError={errors.email?.message}
              />
            )}
          />
        </S.BoxInput>
        <S.BoxInput>
          <LabelInput>Senha:</LabelInput>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputDefault
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                autoCapitalize="none"
                secureTextEntry={true}
                onMessageError={errors.password?.message}
              />
            )}
          />
        </S.BoxInput>
      </S.BoxInputsLogin>

      {loading ? (
        <ActivityIndicator size={"large"} color={COLOR.button.background} />
      ) : (
        <ButtonDefault text="Confirmar" onPress={handleSubmit(submitForm)} />
      )}
      <StatusBar translucent />
    </S.Container>
  )
}

export default Login
