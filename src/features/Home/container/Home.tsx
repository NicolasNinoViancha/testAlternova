import React from "react";
import { View, FlatList } from 'react-native';
//additional components
import { ListEmptyComponent, CardProduct } from '../components';
//hooks
import { useTheme } from '@src/hooks';
import { useFecth } from '../hooks';
//models
import { PropsScreen } from '../models';
//styles
import { styles } from '../styles';
//component
const Home = ({ navigation }: PropsScreen) => {
    //hooks
    const {
        colors,
    } = useTheme();
    const {
        data,
        loading,
        error,
        refetch
    } = useFecth();
    //functions
    const handleNavigation = (id: number) => navigation.navigate('DetailProduct', { idProduct: id });
    //main component
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={(loading || error)
                    ? []
                    : data}
                keyExtractor={(item, index) => `item_${item.id}`}
                renderItem={({ item, index }) => (
                    <CardProduct
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        stock={item.stock}
                        onPress={() => handleNavigation(item.id)} />
                )}
                ListEmptyComponent={
                    <ListEmptyComponent
                        loading={loading}
                        error={error}
                        onRefetch={() => refetch()} />
                } />
        </View>
    );
}
export default Home;