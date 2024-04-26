import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { ActivityIndicator, Alert, TouchableOpacity } from "react-native"
import { useQuery, gql, useMutation } from "@apollo/client"
import { StatusBar } from "expo-status-bar"
import { MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons"

import * as S from "./styles"
import { COLOR } from "../../globalStyles"
import Header from "../../component/Header"
import EditUserModal from "../../component/EditUserModal"
import {
  deleteExampleTableDashboardGQL,
  getExamplesTablesDashboardGQL,
} from "../../service/queries-mutations"
import type { ListTypes } from "../../types/ListTypes"

const Home = () => {
  const navigation = useNavigation()
  const [userEdit, setUserEdit] = useState<ListTypes>({} as ListTypes)
  const [isVisibleModalEditUser, setIsVisibleModalEditUser] =
    useState<boolean>(false)

  //LISTA OS USUARIOS -
  const GET_EXAMPLES_TABLES_DASHBOARD = gql`
    ${getExamplesTablesDashboardGQL}
  `
  const {
    data: listUser,
    loading: loadingListUser,
    refetch: refetchListUser,
  } = useQuery(GET_EXAMPLES_TABLES_DASHBOARD, {
    variables: {
      deleted: false,
    },
    onCompleted(data) {
      console.log("Lista User:", data)
      if (data.getExamplesTablesDashboard.status == "success") {
        console.log("LIsta de User:", data)
      }
    },
    onError(error) {
      Alert.alert(
        "ERROR",
        "Houve um erro ao listar os usuarios: " + error.message
      )
      console.log("ERROR:", error)
    },
  })
  //------------------------------------------------------------------------------

  //DELETA O USUARIO
  const DELETE_EXAMPLE_TABLE_DASHBOARD = gql`
    ${deleteExampleTableDashboardGQL}
  `
  const [deleteUserMutation, { loading: loadingDeleteUser }] = useMutation(
    DELETE_EXAMPLE_TABLE_DASHBOARD,
    {
      onCompleted(data) {
        console.log("DELETADO:", data)
        refetchListUser()
      },
      onError(error) {
        console.log("ERRO AO DELETAR", error)
      },
    }
  )

  const handleDeleteUser = (id: number) => {
    deleteUserMutation({
      variables: {
        exampleTableId: id,
        deleted: true,
      },
    })
  }
  //----------------------------------------------------------------------------------------

  //ABRI O MODAL DE EDIÇÃO DE USUARIO
  const handleOpenModalEditUser = (userEdit: ListTypes) => {
    setIsVisibleModalEditUser(true)
    setUserEdit(userEdit)
  }
  return (
    <S.Container>
      <Header />
      <S.ScrollV>
        <S.Content>
          {loadingListUser ? (
            <ActivityIndicator
              style={{ alignSelf: "center" }}
              size={"large"}
              color={COLOR.button.background}
            />
          ) : (
            listUser.getExamplesTablesDashboard.data &&
            listUser.getExamplesTablesDashboard.data.map((item: ListTypes) => (
              <S.CardListUser
                style={{ elevation: 3 }}
                key={item.id}
                onPress={() => handleOpenModalEditUser(item)}
              >
                <S.AvatarUser onPress={() => navigation.navigate("Profile")}>
                  <S.ImgUser
                    source={require("../../../assets/img/avatar-user.png")}
                    fadeDuration={1}
                  />
                </S.AvatarUser>
                <S.BoxTextEmailUser>
                  <S.TextEmailUser
                    numberOfLines={1}
                    style={{ fontWeight: "bold" }}
                  >
                    {item.email}
                  </S.TextEmailUser>
                  <S.TextEmailUser numberOfLines={1}>
                    {item.phone}
                  </S.TextEmailUser>
                </S.BoxTextEmailUser>

                {loadingDeleteUser ? (
                  <ActivityIndicator size={"small"} color={COLOR.red_error} />
                ) : (
                  <TouchableOpacity onPress={() => handleDeleteUser(item.id)}>
                    <MaterialIcons
                      name="delete-forever"
                      size={28}
                      color={COLOR.red_error}
                    />
                  </TouchableOpacity>
                )}
              </S.CardListUser>
            ))
          )}
        </S.Content>
      </S.ScrollV>
      <S.ButtonAddUser onPress={() => navigation.navigate("NewUser")}>
        <AntDesign name="adduser" size={24} color="#fff" />
      </S.ButtonAddUser>
      <EditUserModal
        isvisible={isVisibleModalEditUser}
        setIsVisible={setIsVisibleModalEditUser}
        user={userEdit}
      />
      <StatusBar translucent />
    </S.Container>
  )
}

export default Home
