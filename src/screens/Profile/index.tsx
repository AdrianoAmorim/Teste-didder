import React, { useEffect, useState } from "react"
import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, FontAwesome } from "@expo/vector-icons"

import * as S from "./styles"
import { COLOR } from "../../globalStyles"
import { UserTypes } from "../../types/UserTypes"
import { getUserAsync } from "../../util/serviceAsync"

const Profile = () => {
  const [user, setUser] = useState<UserTypes>()
  const navigation = useNavigation()

  useEffect(() => {
    ;(async () => {
      const result = await getUserAsync()
      if (result) {
        setUser(result)
      }
    })()
  }, [])

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
        <S.TitlePage>PERFIL</S.TitlePage>
      </S.HeaderProfile>

      <S.Content>
        <S.BoxAvatarUser>
          <S.AvatarUser>
            <FontAwesome
              name="user"
              size={34}
              color={COLOR.button.background}
            />
          </S.AvatarUser>
          <S.TextUserName>{user?.username}</S.TextUserName>
        </S.BoxAvatarUser>
        <S.BoxDataUser>
          <S.LabelDataUser>ID App:</S.LabelDataUser>
          <S.TextDataUser>{user?.appId}</S.TextDataUser>
        </S.BoxDataUser>
        <S.BoxDataUser>
          <S.LabelDataUser>Email:</S.LabelDataUser>
          <S.TextDataUser>{user?.email}</S.TextDataUser>
        </S.BoxDataUser>
        <S.BoxDataUser>
          <S.LabelDataUser>Telefone:</S.LabelDataUser>
          <S.TextDataUser>{user?.phone}</S.TextDataUser>
        </S.BoxDataUser>
        <S.BoxDataUser>
          <S.LabelDataUser>UTC:</S.LabelDataUser>
          <S.TextDataUser>{user?.utc}</S.TextDataUser>
        </S.BoxDataUser>
        <S.BoxDataUserH>
          <S.LabelDataUser>Autenticação 2 fatores:</S.LabelDataUser>
          {user?.twoFactorEnabled ? (
            <S.TwoFactoryEnable />
          ) : (
            <S.TwoFactoryDisable />
          )}
        </S.BoxDataUserH>
      </S.Content>
    </S.Container>
  )
}

export default Profile
