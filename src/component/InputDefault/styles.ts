import styled from "styled-components/native";
import { COLOR } from "../../globalStyles";


export const InputDefault = styled.TextInput`
    width: 100%;
    height: 48px;
    font-size: 18px;
    background-color: ${COLOR.bg_input};
    border-width: 2px;
    border-color: ${COLOR.blue_lv1};
    border-radius: 8px;
    padding:0 10px;
    color: ${COLOR.text_black};
    font-weight: 400;
`
export const LabelError = styled.Text`
    font-size: 14px;
    color: ${COLOR.red_error};

`