import React from "react"
import { useNavigation } from "@react-navigation/native"
import { FontAwesome } from "@expo/vector-icons"

import * as S from "./styles"
import { COLOR } from "../../globalStyles"

const Header = () => {
  const navigation = useNavigation()
  return (
    <S.Container>
      <S.BoxLogo>
        <S.TextLogoA>TESTE</S.TextLogoA>
        <S.TextLogoB>DIDDER</S.TextLogoB>
      </S.BoxLogo>

      <S.AvatarUser onPress={() => navigation.navigate("Profile")}>
        <FontAwesome name="user" size={24} color={COLOR.button.background} />
      </S.AvatarUser>
    </S.Container>
  )
}

export default Header
