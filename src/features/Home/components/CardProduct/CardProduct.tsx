import React from "react";
import { View, Text } from 'react-native';
//models
import { PropsCardProduct } from './models';
//styles
//component
const CardProduct = ({

}: PropsCardProduct) => (
    <View>
        <Text>{`soy un producto weeee`}</Text>
    </View>
);
export default CardProduct;