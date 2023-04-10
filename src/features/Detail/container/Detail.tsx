import React from 'react';
import { View, ScrollView, ActivityIndicator, Text, Alert } from 'react-native';
//additional components
import { SectionContent } from '../components';
import { ButtonText } from '@src/components';
//custom hooks
import { useFecth } from '../hooks';
//models
import { PropsDetail } from '../models';
//styles
import { styles } from '../styles';
import { COLORS } from '@src/theme';
//component
const Detail = ({
    navigation,
    route
}: PropsDetail) => {
    //recep params
    const { id: idProduct } = route.params;
    //custom hooks
    const {
        data,
        loading,
        error,
        refetch
    } = useFecth(`detail/${idProduct}`);
    //functions
    const handleBuy = (id: number, total: number) =>
        Alert.alert('Comprar', `id:${id}\ntotal:${total}`);
    //main component
    if (loading)
        return (
            <View style={styles.container}>
                <View style={styles.ctnLoading}>
                    <ActivityIndicator
                        size="large"
                        color={COLORS.common.black} />
                    <Text style={styles.textLoading}>
                        {`Cargando...`}
                    </Text>
                </View>
            </View>
        );
    if (error)
        return (
            <View style={styles.container}>
                <ButtonText
                    text="Intentar de nuevo"
                    onPress={() => refetch()} />
            </View>
        );
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <SectionContent
                    testID='componentSectionContent'
                    id={data?.id}
                    image={data?.image || ''}
                    title={data?.name}
                    description={data?.description}
                    stock={data?.stock}
                    price={data?.price}
                    onBuy={handleBuy} />
            </ScrollView>
        </View>
    )
};

export default Detail;