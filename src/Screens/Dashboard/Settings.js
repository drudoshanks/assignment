import React, { useState } from 'react';
import SimpleToast from 'react-native-simple-toast';
import { Text, View, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import Header from '../../Components/Header';
import colors from '../../Theme/Colors';

// ------------------------------------------

const Settings = ({ navigation }) => {

    return (

        <View style={styles.mainContainer}>

            <Header Title={'Settings'} />
            <View style={{flex:1, justifyContent:'center'}}>
                <Text style={{ fontSize: 15, color: colors.Black }}>{'Settings'}</Text>
            </View>
        </View>


    );

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.Background
    }
})
export default Settings;
