import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Login from "../screens/Login"
import Home from "../screens/Home"
import Profile from "../screens/Profile"
import NewUser from "../screens/NewUser"

const Stack = createNativeStackNavigator()

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined
      Home: undefined
      Profile: undefined
      NewUser: undefined
    }
  }
}

const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="NewUser" component={NewUser} />
    </Stack.Navigator>
  )
}

export default StackRoutes
