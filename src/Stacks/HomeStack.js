import React, { useState } from 'react'
import { View, Pressable, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/Dashboard/Home'
import Friends from '../Screens/Dashboard/Friends';
import Settings from '../Screens/Dashboard/Settings';
import Icons from '../Assets/Images/Index'
import colors from '../Theme/Colors';

const Tab = createBottomTabNavigator();

const HomeStack = ({ navigation }) => {

    return (
        <Tab.Navigator

            initialRouteName="Home"
            activeColor="#fff"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,


            }}
            tabBar={(props) => {
                const { navigation, state } = props
                const activeColor = colors.Primary
                return (

                    <View style={styles.mainTabContainer}>


                        <Pressable
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Home' }]
                                })
                            }}>
                            <Image
                                source={Icons.Home}
                                resizeMode='contain'
                                style={{
                                    width: 22,
                                    height: 22,
                                    tintColor: state.index === 0 ? colors.Primary : colors.Secondary
                                }}
                            />
                            <Text style={[styles.tabTitle, { color: state.index === 0 ? colors.Primary : colors.Secondary }]}>{'Home'}</Text>
                        </Pressable>

                        <Pressable
                            onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Friends' }]
                                })
                            }}
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                            <Image
                                source={Icons.Friends}
                                resizeMode='contain'
                                style={{
                                    width: 21,
                                    height: 21,
                                    tintColor: state.index === 1 ? colors.Primary : colors.Secondary
                                }}
                            />
                            <Text style={[styles.tabTitle, { color: state.index === 1 ? colors.Primary : colors.Secondary }]}>{'Friends'}</Text>
                        </Pressable>

                        <Pressable
                            onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Settings' }]
                                })
                            }}
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                            <Image
                                source={Icons.Settings}
                                resizeMode='contain'
                                style={{
                                    width: 21,
                                    height: 21,
                                    tintColor: state.index === 2 ? colors.Primary : colors.Secondary
                                }}
                            />
                            <Text style={[styles.tabTitle, { color: state.index === 2 ? colors.Primary : colors.Secondary }]}>{'Settings'}</Text>
                        </Pressable>

                    </View>

                )
            }}>

            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Friends"
                component={Friends} />
            <Tab.Screen
                name="Settings"
                component={Settings} />

        </Tab.Navigator>


    )
}


export default HomeStack;

const styles = StyleSheet.create({

    mainTabContainer: {
        height: 68,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: colors.White,
        flexDirection: 'row',
        elevation:5,
        shadowColor: colors.Black,
        shadowOffset:{width:5, height:-1},
        shadowOpacity:0.16,
        // shadowRadius:5
    },
    tabTitle: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: 6
    },
})

