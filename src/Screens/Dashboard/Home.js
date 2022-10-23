import React, { useEffect, useState } from 'react';
import SimpleToast from 'react-native-simple-toast';
import { Text, View, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import colors from '../../Theme/Colors';
import Header from '../../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { addFriend } from '../../Redux/Actions/Index';

// ------------------------------------------

const Home = ({ navigation }) => {

  const { isInternetConnectivity, friendsList } = useSelector(state => state.AddFriend)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(isInternetConnectivity);
    AddFriend()
  }, ["Internet connection", isInternetConnectivity])

  const AddFriend = async () => {

    if (friendsList.length > 0 && isInternetConnectivity) {
      console.log('uploading store data to server');
      for (let index = 0; index < friendsList.length; index++) {
        try {
          const data = friendsList[index]

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

          console.log('Brfore......', friendsList);

          let tempArray = friendsList
          let newArray = tempArray.filter((item) => {
            return item?.Id != response?.Id
          })
          dispatch(addFriend(newArray))
          console.log('After......', friendsList);

        } catch (error) {
          console.log("addFriend-error", error);
        }


      }
    } else {
      return
    }
  };

  return (

    <View style={styles.mainContainer}>

      <Header Title={'Home'} />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: 15, color: colors.Black }}>{'Home'}</Text>
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
export default Home;
