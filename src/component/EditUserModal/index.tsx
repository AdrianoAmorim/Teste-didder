import React, { useEffect } from "react"
import { Modal, TouchableOpacity, Alert } from "react-native"
import { Controller, useForm } from "react-hook-form"
import { gql, useMutation } from "@apollo/client"
import { Ionicons } from "@expo/vector-icons"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import * as S from "./styles"
import { COLOR } from "../../globalStyles"
import ButtonDefault from "../ButtonDefault"
import LabelInput from "../LabelInput"
import InputDefault from "../InputDefault"
import type { ListTypes } from "../../types/ListTypes"
import { newUserScheme } from "../../schemeValidation/SchemeNewUser"
import { updateExampleTableDashboardGQL } from "../../service/queries-mutations"

interface IEditUserModal {
  isvisible: boolean
  setIsVisible: React.Dispatch<boolean>
  user: ListTypes
}
type EditUserTypes = z.infer<typeof newUserScheme>

const EditUserModal = ({ isvisible, setIsVisible, user }: IEditUserModal) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EditUserTypes>({
    resolver: zodResolver(newUserScheme),
  })
  const handleCloseModal = () => {
    setIsVisible(!isvisible)
  }

  //Editar um USUARIO
  const UPDATE_EXAMPLE_TABLE_DASHBOARD = gql`
    ${updateExampleTableDashboardGQL}
  `
  const [editUserMutation, { loading: loadingEditUser }] = useMutation(
    UPDATE_EXAMPLE_TABLE_DASHBOARD,
    {
      onCompleted(data) {
        console.log("Editado:", data)
        Alert.alert("AVISO", "Usuario Editado com Sucesso!")
        handleCloseModal()
      },
      onError(error) {
        console.log("ERRO AO cadastrar", error)
        Alert.alert("Error", "Erro ao cadastrar novo Usuario!")
      },
    }
  )

  const submitForm = (data: EditUserTypes) => {
    editUserMutation({
      variables: {
        exampleTableId: user.id,
        email: data.email,
        phone: data.phone,
      },
      refetchQueries: ["GET_EXAMPLES_TABLES_DASHBOARD"],
    })
  }
  //-------------------------------------------------------------------------------------

  useEffect(() => {
    setValue("email", user.email)
    setValue("phone", user.phone)
  }, [isvisible])

  return (
    <Modal animationType="slide" visible={isvisible}>
      <S.ContainerModal>
        <S.HeaderProfile>
          <TouchableOpacity onPress={handleCloseModal}>
            <Ionicons
              name="close-circle-outline"
              size={36}
              color={COLOR.button.background}
            />
          </TouchableOpacity>
          <S.TitlePage>EDITAR</S.TitlePage>
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

          <ButtonDefault
            style={{ alignSelf: "center" }}
            text="Confirmar"
            onPress={handleSubmit(submitForm)}
          />
        </S.Content>
      </S.ContainerModal>
    </Modal>
  )
}

export default EditUserModal
