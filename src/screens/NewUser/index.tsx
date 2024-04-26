import React from "react"
import { ActivityIndicator, Alert, TouchableOpacity } from "react-native"
import { useForm, Controller } from "react-hook-form"
import { useNavigation } from "@react-navigation/native"
import { gql, useMutation } from "@apollo/client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { StatusBar } from "expo-status-bar"
import { Ionicons } from "@expo/vector-icons"

import * as S from "./styles"
import { COLOR } from "../../globalStyles"
import InputDefault from "../../component/InputDefault"
import LabelInput from "../../component/LabelInput"
import ButtonDefault from "../../component/ButtonDefault"
import { createExampleTableDashboardGQL } from "../../service/queries-mutations"
import { newUserScheme } from "../../schemeValidation/SchemeNewUser"

type NewUserTypes = z.infer<typeof newUserScheme>

const NewUser = () => {
  const navigation = useNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUserTypes>({
    resolver: zodResolver(newUserScheme),
  })

  //CADASTRA UM NOVO USUARIO
  const CREATE_EXAMPLE_TABLE_DASHBOARD = gql`
    ${createExampleTableDashboardGQL}
  `
  const [newUserMutation, { loading: loadingNewUser }] = useMutation(
    CREATE_EXAMPLE_TABLE_DASHBOARD,
    {
      onCompleted(data) {
        console.log("cadastrado:", data)
        Alert.alert("AVISO", "Usuario cadastrado com sucesso!")
        navigation.goBack()
      },
      onError(error) {
        console.log("ERRO AO cadastrar", error)
        Alert.alert("Error", "Erro ao cadastrar novo Usuario!")
      },
    }
  )

  const submitForm = (data: NewUserTypes) => {
    newUserMutation({
      variables: {
        typeText: "string",
        typeBoolean: true,
        typeInt: 1,
        typeDatetime: new Date().toISOString(),
        typeEnum: "exampleOne",
        exampleOtherOneId: 1,
        exampleOtherTwoId: 2,
        typeDecimal: 12,
        typeCurrency: 12,
        email: data.email,
        phone: data.phone,
      },
      refetchQueries: ["GET_EXAMPLES_TABLES_DASHBOARD"],
    })
  }
  //-------------------------------------------------------------------------------------------

  return (
    <S.Container>
      <S.HeaderProfile>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={36}
            color={COLOR.button.background}
          />
        </TouchableOpacity>
        <S.TitlePage>NOVO USUARIO</S.TitlePage>
      </S.HeaderProfile>

      <S.Content>
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
                  keyboardType="email-address"
                  onMessageError={errors.email?.message}
                />
              )}
            />
          </S.BoxInput>
          <S.BoxInput>
            <LabelInput>Telefone:</LabelInput>
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, onBlur, value } }) => (
                <InputDefault
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  autoCapitalize="none"
                  keyboardType="phone-pad"
                  onMessageError={errors.phone?.message}
                />
              )}
            />
          </S.BoxInput>
        </S.BoxInputsLogin>

        {loadingNewUser ? (
          <ActivityIndicator
            style={{ alignSelf: "center" }}
            size={"large"}
            color={COLOR.button.background}
          />
        ) : (
          <ButtonDefault
            style={{ alignSelf: "center" }}
            text="Confirmar"
            onPress={handleSubmit(submitForm)}
          />
        )}
      </S.Content>

      <StatusBar translucent />
    </S.Container>
  )
}

export default NewUser
