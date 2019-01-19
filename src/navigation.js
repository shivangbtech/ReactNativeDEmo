import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/HomeScreen/homeScreen'
import DetailScreen from './screens/DetailScreen/detailScreen'
import LoginScreen from './screens/LoginScreen/loginScreen'

const AppNavigator = createStackNavigator({
    Login:{
        screen: LoginScreen
    },
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: DetailScreen,
    },
}, {
    initialRouteName: 'Login',
});

export default createAppContainer(AppNavigator);