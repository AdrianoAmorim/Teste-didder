import styled from "styled-components/native";
import { COLOR } from "../../globalStyles";


export const ButtonDefault = styled.TouchableOpacity`
    width: 120px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: ${COLOR.button.background};
    border-radius: 8px;
`

export const TextButton = styled.Text`
    color:${COLOR.button.text};
    font-size:18px;
`