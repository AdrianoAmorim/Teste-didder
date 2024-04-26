import React, { ReactNode } from "react"

import * as S from "./styles"

interface ILabelInput {
  children: ReactNode
}

const LabelInput = ({ children }: ILabelInput) => {
  return <S.Label>{children}</S.Label>
}

export default LabelInput
