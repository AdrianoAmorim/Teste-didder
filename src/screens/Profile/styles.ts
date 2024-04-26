import styled from "styled-components/native";
import { COLOR } from "../../globalStyles";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${COLOR.background};
    padding-top: 10%;
`
export const HeaderProfile = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom-width: 2px;
    border-color: ${COLOR.button.background};
`
export const TextUserName = styled.Text`
    font-size: 22px;
    color: ${COLOR.text_black};
    font-weight: bold;

`
export const TitlePage = styled.Text`
    font-size: 26px;
    font-weight: bold;
    color: ${COLOR.text_black};
`
export const BoxAvatarUser = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 4px;
`
export const AvatarUser = styled.View`
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 54px;
    border-width: 2px;
    border-radius: 45px;
    border-color: ${COLOR.button.background};
    background-color: ${COLOR.bg_input};
    margin-right: 12px;
`

export const Content = styled.View`
    width: 100%;
    padding: 20px;
    gap: 20px;
`

export const BoxDataUser = styled.View`
    width: 100%;
    gap: 10px;
    border-bottom-width: 2px;
    border-color: ${COLOR.blue_lv1};
`

export const LabelDataUser = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${COLOR.text_black};
`
export const BoxTextExit = styled.TouchableOpacity`
    margin-top: 20px;
`

export const TextExit = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${COLOR.red_error};
`
export const TextDataUser = styled.Text`
    font-size: 16px;
    font-weight: 400;
    color: ${COLOR.text_black};
`
export const TwoFactoryDisable = styled.View`
    width: 18px;
    height: 18px;
    border-radius: 10px;
    background: ${COLOR.red_error};
`
export const TwoFactoryEnable = styled.View`
    width: 18px;
    height: 18px;
    border-radius: 9px;
    background: ${COLOR.button.background};
`
export const BoxDataUserH = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 10px;
`