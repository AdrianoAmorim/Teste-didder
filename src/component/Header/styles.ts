import styled from "styled-components/native";
import { COLOR } from "../../globalStyles";


export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    border-bottom-width: 2px;
    border-color: ${COLOR.button.background};
`
export const AvatarUser = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-width: 2px;
    border-radius: 20px;
    border-color: ${COLOR.button.background};
    background-color: ${COLOR.bg_input};
`
export const BoxLogo = styled.View`
    flex-direction: row;
    align-items: center;
`
export const TextLogoA = styled.Text`
    color: ${COLOR.text_black};
    font-size: 22px;
    font-weight: 400;
`
export const TextLogoB = styled.Text`
    color: ${COLOR.button.background};
    font-size: 28px;
    font-weight: bold;
`