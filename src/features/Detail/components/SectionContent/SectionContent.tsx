import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
//additional components
import { Image, Icon } from '@src/components';
//models
import { PropsSectionContent } from './models';
//styles
import { styles } from './styles';
import { COLORS } from '@src/theme';
//component
const SectionContent = ({
    id = 0,
    image = '',
    title = '',
    description = '',
    stock = 0,
    price = 0,
    onBuy
}: PropsSectionContent) => {
    //states
    const [numberItems, setNumberItems] = useState<number>(0);
    //functions
    const handleSubItem = () => setNumberItems(prev => (prev - 1 < 0 ? 0 : prev - 1));
    const handleAddItem = () => setNumberItems(prev => (prev + 1 > stock ? stock : prev + 1));
    const handleBuy = () => numberItems !== 0 && onBuy(id, numberItems);
    //main component
    return (
        <View style={styles.container}>
            <View style={styles.ctnImage}>
                <Image
                    resizeMode={'contain'}
                    source={image} />
            </View>
            <View style={styles.ctnInfo}>
                <Text style={[styles.title]}>
                    {title}
                </Text>
                <Text style={styles.description}>
                    {description}
                </Text>
                <Text style={styles.price}>
                    {`Stock : ${stock}`}
                </Text>
                <Text style={styles.price}>
                    {`$ ${price}`}
                </Text>
                <View style={styles.ctnDetails}>
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
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.btnBuy}
                        onPress={handleBuy}>
                        <Text style={styles.textBtnBuy}>
                            {`Comprar`}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default SectionContent;