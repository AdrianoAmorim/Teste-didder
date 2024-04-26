import styled from "styled-components/native";
import { COLOR } from "../../globalStyles";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${COLOR.background};

`
export const BoxInputsLogin = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0 20px;
    margin: 16px 0;
`

export const TitleText = styled.Text`
    font-size: 28px;
    color: ${COLOR.text_black};
    font-weight: 600;
`
export const BoxInput = styled.View`
    width: 100%;
    gap: 8px;

`