import React from 'react';
import SimpleToast from 'react-native-simple-toast';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import colors from '../Theme/Colors';
import Icons from '../Assets/Images/Index';

const Header = (props) => {

    const { Title, GoBack, navigation } = props

    return (

        <View style={{
            height: 70,
            width: '100%',
            backgroundColor: colors.Primary,
            elevation: 3,
            shadowColor: colors.Black,
            shadowOffset: { width: 5, height: 1 },
            shadowOpacity: 0.16,
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Text style={{
                fontSize: 20,
                fontWeight: '600',
                color: colors.White
            }}>{Title}</Text>

            {
                GoBack &&
                <TouchableOpacity
                    style={{ height: 40, width: 40, position: 'absolute', left: 15, justifyContent: 'center', }}
                    activeOpacity={0.8}
                    onPress={() => navigation.pop()}
                >
                    <Image source={Icons.Backward} style={{ height: 27, width: 27, tintColor: colors.White, }} resizeMode={'contain'} />
                </TouchableOpacity>
            }

        </View>



    )
};


export default Header;

