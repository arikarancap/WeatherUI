import * as React from 'react';
import { Appbar, Title } from 'react-native-paper';
import { View, Text } from 'react-native';

const Header = ({Title,}) => {
    return (
        <View style={{ height: 57, width: '100%', backgroundColor: '#0E2954',alignContent: 'center',justifyContent: 'center'}} >
            <Text style={{fontSize:17,color:'white',textAlign:'center',}} >{Title}</Text>
        </View>
    );
};

export default Header;