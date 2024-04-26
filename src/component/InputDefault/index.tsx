import React from "react"
import { TextInputProps } from "react-native"

import * as S from "./styles"

interface IInputDefault extends TextInputProps {
  onMessageError?: string | null
}
const InputDefault = ({ onMessageError, ...props }: IInputDefault) => {
  return (
    <>
      <S.InputDefault {...props} />
      {onMessageError && <S.LabelError>{onMessageError}</S.LabelError>}
    </>
  )
}

export default InputDefault
