import React from "react";
//additional libraries
import RNIcon from 'react-native-vector-icons/Ionicons';
//models
import { PropsIcon } from './models';
//component
const Icon = ({
    name,
    color,
    size
}: PropsIcon) => (
    <RNIcon
        name={name}
        size={size}
        color={color} />
);

export default Icon;