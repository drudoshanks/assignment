import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View, ActivityIndicator } from 'react-native'
import colors from '../Theme/Colors'

const ContainedButton = (props) => {

    const { style, onPress, isLoading } = props


    return (

        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[styles.mainContainer, style]} >
            {
                isLoading ?
                    <ActivityIndicator size={'small'} color={colors.White} />
                    :
                    <Text style={[styles.btnText]}>{'Save'}</Text>
            }
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.Primary,
        flexDirection: 'row',
        borderRadius: 10,
        elevation: 2
    },
    btnText: {
        color: colors.White,
        fontSize: 15,
    },

})

export default ContainedButton

