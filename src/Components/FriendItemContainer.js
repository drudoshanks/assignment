import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native'
import Icons from '../Assets/Images/Index'
import colors from '../Theme/Colors'

const FriendItemContainer = ({ navigation, Item }) => {



    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
                navigation.navigate('AddFriend', { Details: Item })
            }}
            style={styles.mainView}>

            <Image
                source={Icons.DummyProfile} style={{
                    height: 32,
                    width: 32,
                    borderRadius: 32

                }} resizeMode='contain' resizeMethod='resize' />

            <Text style={{
                fontSize: 16,
                color: colors.Black,
                paddingHorizontal: 16
            }}>{Item?.First_Name__c + ' ' + Item?.Last_Name__c}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainView: {
        height: 56,
        flexDirection: 'row',
        width: '99.5%',
        backgroundColor: colors.White,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        alignItems: 'center',
        paddingHorizontal: 8,
        elevation: 1,
        alignSelf: 'center'
    }
})

export default FriendItemContainer;
