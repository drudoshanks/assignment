import React, { useEffect, useRef, useState } from 'react';
import SimpleToast from 'react-native-simple-toast';
import { Text, View, Image, StyleSheet, TouchableOpacity, Keyboard, } from 'react-native';
import Header from '../../Components/Header';
import colors from '../../Theme/Colors';
import InputField from '../../Components/InputField';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ContainedButton from '../../Components/ContainedButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFriend } from '../../Redux/Actions/Index';
import Icons from '../../Assets/Images/Index';

// ------------------------------------------

const AddFriend = ({ navigation, route }) => {

    const { isInternetConnectivity, friendsList } = useSelector(state => state.AddFriend)
    const { Details } = route?.params
    useEffect(() => {
        console.log(isInternetConnectivity);
        console.log(friendsList);
    }, [])

    const dispatch = useDispatch()
    const [fName, setFname] = useState(Details != null ? Details?.First_Name__c : '')
    const [lName, setLname] = useState(Details != null ? Details?.Last_Name__c : '')
    const [age, setage] = useState(Details != null ? Details?.Age__c.toString() : '')
    const [isLoading, setIsLoading] = useState(false)
    const [edit, setEdit] = useState(false)
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const ageRef = useRef()

    const AddFriend = async () => {

        if (isInternetConnectivity) {
            if ((fName === '' && lName === '' && age === '')) {
                SimpleToast.show('All fields are mandatory')
            } else if (fName == '') {
                SimpleToast.show('First Name Required')
            } else if (lName == '') {
                SimpleToast.show('Last Name Required')
            } else if (age == '') {
                SimpleToast.show('Age Required')
            } else {
                try {
                    setIsLoading(true)
                    const data = {
                        attributes: {
                            type: "Friend__c"
                        },
                        Name: "FR-00002",
                        First_Name__c: fName,
                        Last_Name__c: lName,
                        Age__c: age
                    }

                    const config = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data)
                    };
                    const response = await fetch(`https://rnapp-mock-developer-edition.ap24.force.com/services/apexrest/apiservice`, config)
                    const Jsonresponse = await response.json();
                    console.log(response.status);
                    console.log('addFriend-response', Jsonresponse);
                    setIsLoading(false)

                } catch (error) {
                    setIsLoading(false)
                    console.log("addFriend-error", error);
                }
            }
        } else {
            let tempArray = friendsList
            tempArray.push({
                attributes: {
                    type: "Friend__c"
                },
                Name: "FR-00002",
                First_Name__c: fName,
                Last_Name__c: lName,
                Age__c: age

            })

            dispatch(addFriend(tempArray))
            SimpleToast.show('Will add when come back online')
        }



    };

    return (

        <View style={styles.mainContainer}>

            <Header Title={'Add Friend'} GoBack navigation={navigation} />
            {
                Details != null &&
                <TouchableOpacity
                    onPress={() => {
                        firstNameRef?.current?.focus()
                        setEdit(true)
                    }}
                    activeOpacity={0.8}
                    style={styles.editFriend}
                >
                    <Image source={Icons.Edit} style={styles.edit} resizeMode={'contain'} />
                </TouchableOpacity>
            }


            <View style={{ paddingTop: 15, paddingHorizontal: 16 }}>
                <KeyboardAwareScrollView>
                    <InputField
                        onChangeText={val => setFname(val)}
                        value={fName}
                        returnKeyType={'next'}
                        fieldRef={firstNameRef}
                        onSubmitEditing={() => {
                            lastNameRef?.current?.focus()
                        }}
                        placeholder='First Name'
                    />

                    <InputField
                        onChangeText={val => setLname(val)}
                        value={lName}
                        returnKeyType={'next'}
                        fieldRef={lastNameRef}
                        onSubmitEditing={() => {
                            ageRef?.current?.focus()
                        }}
                        placeholder='Last Name'
                        customStyle={{
                            marginTop: 30
                        }}
                    />

                    <InputField
                        onChangeText={val => setage(val)}
                        value={age}
                        returnKeyType={'done'}
                        fieldRef={ageRef}
                        onSubmitEditing={() => {
                            Keyboard.dismiss()
                        }}
                        placeholder='Age'
                        customStyle={{
                            marginTop: 30
                        }}
                    />

                    <ContainedButton style={{ marginTop: 30 }} isLoading={isLoading} onPress={() => AddFriend()} />
                </KeyboardAwareScrollView>

            </View>

        </View>


    );

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.Background
    },
    editFriend: {
        height: 50,
        width: 50,
        borderRadius: 70,
        backgroundColor: colors.Background,
        elevation: 2,
        position: 'absolute',
        right: 22,
        bottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    edit: {
        height: 25,
        width: 25,
        tintColor: colors.Primary
    }
})
export default AddFriend;
