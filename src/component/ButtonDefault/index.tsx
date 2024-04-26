import React from "react"
import { TouchableOpacityProps } from "react-native"

import * as S from "./styles"

interface IButtonDefault extends TouchableOpacityProps {
  text: string
}

const ButtonDefault = ({ text, ...props }: IButtonDefault) => {
  return (
    <S.ButtonDefault {...props}>
      <S.TextButton>{text}</S.TextButton>
    </S.ButtonDefault>
  )
}

export default ButtonDefault
