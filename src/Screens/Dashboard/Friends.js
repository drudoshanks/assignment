import React, { useEffect, useState } from 'react';
import SimpleToast from 'react-native-simple-toast';
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, } from 'react-native';
import Header from '../../Components/Header';
import colors from '../../Theme/Colors';
import FriendItemContainer from '../../Components/FriendItemContainer';
import Icons from '../../Assets/Images/Index';
import { useSelector } from 'react-redux';

// ------------------------------------------

const Friends = ({ navigation }) => {

    const { isInternetConnectivity, friendsList } = useSelector(state => state.AddFriend)

    const [friends, setFriends] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const abortController = new AbortController()
        const config = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }
        fetch(`https://rnapp-mock-developer-edition.ap24.force.com/services/apexrest/apiservice`, config)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                updateFriendsList(responseJson);
            }).catch(err => {
                console.log("getFriendsList-err", err)
                setIsLoading(false)

            })

        return () => {
            setIsLoading(null)
            setFriends([])
            abortController.abort()
        }
    }, [])

    const updateFriendsList =  (responseJson) => {
        setIsLoading(false)
        setFriends(responseJson)
    }

    return (

        <View style={styles.mainContainer}>

            <Header Title={'Friends'} />

            <View style={{ paddingHorizontal: 16, justifyContent: 'center' }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={friends}
                    renderItem={({ item }) => (
                        <FriendItemContainer Item={item} navigation={navigation} />
                    )}
                    keyExtractor={(item, index) => 'stf' + index}
                    contentContainerStyle={{ paddingTop: 15, paddingBottom: 150 }}
                    style={{
                        flexGrow: 0,
                    }}
                    ListEmptyComponent={() => {
                        if (isLoading) return <ActivityIndicator size={'large'} color={colors.Primary} style={{ flex: 1, marginTop: '50%' }} />
                        return (
                            <Text style={{ fontSize: 15, color: colors.Black, marginTop: '50%', alignSelf: 'center' }}>{!isInternetConnectivity ? 'Please check your connection and try again' : 'No Friends Found'}</Text>
                        )
                    }}
                    ItemSeparatorComponent={() => (
                        <View style={{ marginVertical: 4 }} />
                    )}
                />
            </View>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('AddFriend', { Details: null })
                }}
                activeOpacity={0.8}
                style={styles.addFriend}>
                <Image source={Icons.Add} style={styles.add} resizeMode={'contain'} />
            </TouchableOpacity>
        </View>


    );

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.Background
    },
    addFriend: {
        height: 50,
        width: 50,
        borderRadius: 70,
        backgroundColor: colors.Primary,
        elevation: 2,
        position: 'absolute',
        right: 22,
        bottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    add: {
        height: 25,
        width: 25,
        tintColor: colors.White
    }
})
export default Friends;
