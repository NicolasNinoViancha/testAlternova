import React, { useState } from "react";
import { View, TouchableOpacity, Text } from 'react-native';
//additional components
import { Image, Icon } from '@src/components';
//models
import { PropsCardProduct } from './models';
//styles
import { styles } from './styles';
import { COLORS } from "@src/theme";
//component
const CardProduct = ({
    image = '',
    name = 'Sin informacion',
    price = 0,
    stock = 0,
    onPress
}: PropsCardProduct) => {
    //states
    const [numberItems, setNumberItems] = useState<number>(0);
    //functions
    const handleSubItem = () => setNumberItems(prev => (prev - 1 < 0 ? 0 : prev - 1));
    const handleAddItem = () => setNumberItems(prev => (prev + 1 > stock ? stock : prev + 1));
    //main component
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={styles.container}
            onPress={onPress}>
            <View style={styles.ctnImage}>
                <Image
                    resizeMode={'contain'}
                    source={image} />
            </View>
            <View style={styles.details}>
                <Text
                    style={[styles.title]}
                    numberOfLines={2}>
                    {`${name}`}
                </Text>
                <Text style={styles.textStock}>
                    {`Stock : ${stock}`}
                </Text>
                <Text style={styles.textPrice}>
                    {`$${price}`}
                </Text>
            </View>
            <View style={styles.viewBtnAdd}>
                <View style={styles.ctnBtnAdd}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.btnSub}
                        onPress={handleSubItem}>
                        <Icon
                            name={'remove'}
                            color={COLORS.common.green}
                            size={18} />
                    </TouchableOpacity>
                    <Text style={styles.textNumber}>
                        {`${numberItems}`}
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.btnAdd}
                        onPress={handleAddItem}>
                        <Icon
                            name={'add'}
                            color={COLORS.common.white}
                            size={18} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default CardProduct;