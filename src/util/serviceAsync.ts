import AsyncStorage from "@react-native-async-storage/async-storage";
import type { UserTypes } from "../types/UserTypes";

export const getUserAsync = async () => {
    const userAsync = await AsyncStorage.getItem('AUTH_USER');

    if (userAsync !== null) {
        return JSON.parse(userAsync) as UserTypes
    }
    return null
}


export const getTokenAsync = async () => {
    const token = await AsyncStorage.getItem('AUTH_TOKEN');

    if (token !== null) {
        return token
    }
    return undefined
}