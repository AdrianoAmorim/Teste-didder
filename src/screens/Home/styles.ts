import styled from "styled-components/native";
import { COLOR } from "../../globalStyles";


export const ScrollV = styled.ScrollView`

`
export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: #e2f8fa;
    padding-top: 10%;
`
export const Content = styled.View`
    flex: 1;
    width: 100%;
    padding: 20px;
    padding-bottom: 140px;
    gap: 10px;
`

export const TextDefault = styled.Text`
    font-size: 18px;
    color: #1a1a1a;
    
`
export const TextEmailUser = styled.Text`
    font-size: 18px;
    color: ${COLOR.text_black};
    font-weight: 500;
`

export const CardListUser = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    background-color: ${COLOR.bg_input};
    border-radius: 8px;
`
export const AvatarUser = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 20px;
    background-color: ${COLOR.bg_input};
    overflow: hidden;
`
export const ImgUser = styled.Image`
    width: 52px;
    height: 52px;
    object-fit: cover;
`

export const BoxTextEmailUser = styled.View`
    gap: 5px;
    margin-left: -20px;
`
export const ButtonAddUser = styled.TouchableOpacity`
    position: absolute;
    align-items: center;
    justify-content: center;
    bottom: 60px;
    right: 26px;
    width: 56px;
    height: 56px;
    border-radius: 35px;
    background-color: ${COLOR.button.background};

`