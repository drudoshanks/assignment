import React, { useEffect } from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Splash from '../Screens/Splash';
import HomeStack from './HomeStack';
import AddFriend from '../Screens/Dashboard/AddFriend';
import { useSelector } from 'react-redux';
import { addFriend } from '../Redux/Actions/Index';

const Stack = createStackNavigator()

const MainStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    // gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                initialRouteName={'Splash'}>

                <Stack.Screen
                    name={'Splash'}
                    component={Splash} />

                <Stack.Screen
                    name={'HomeStack'}
                    component={HomeStack} />

                <Stack.Screen
                    name={'AddFriend'}
                    component={AddFriend} />



            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;