import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from '@src/components';
const LogoCompany = require('@src/assets/Images/logoCompany.png');

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <View style={{ width: '80%', height: 100 }}>
                <Image
                    style={{ width: '100%', height: '100%' }}
                    resizeMode={'contain'}
                    source={LogoCompany} />
            </View>
        </View>
    );
}

export default HomeScreen;