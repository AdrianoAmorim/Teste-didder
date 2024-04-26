import styled from "styled-components/native";
import { COLOR } from "../../globalStyles";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${COLOR.background};
    padding-top: 10%;

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
export const HeaderProfile = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom-width: 2px;
    width: 100%;
    border-color: ${COLOR.button.background};
`
export const TitlePage = styled.Text`
    font-size: 26px;
    font-weight: bold;
    color: ${COLOR.text_black};
`
export const Content = styled.View`
    width: 100%;
    padding: 20px;
    gap: 20px;
`