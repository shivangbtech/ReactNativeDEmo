import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/HomeScreen/homeScreen'
import DetailScreen from './screens/DetailScreen/detailScreen'

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: DetailScreen,
    },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);