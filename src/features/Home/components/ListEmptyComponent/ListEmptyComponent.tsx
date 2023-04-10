import React from "react";
import { View, Text, ActivityIndicator } from 'react-native';
//additional components
import { ButtonText } from '@src/components';
//models
import { PropsListEmptyComponent } from './models';
//styles
import { styles } from './styles';
import { COLORS } from '@src/theme';
//component
const ListEmptyComponent = ({
    loading = false,
    error = false,
    onRefetch
}: PropsListEmptyComponent) => {
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
                    onPress={onRefetch} />
            </View>
        );
    return (
        <View style={styles.container}>
            <Text style={[styles.textLoading, { textAlign: 'center' }]}>
                {`No existen elementos`}
            </Text>
        </View>
    );
}
export default ListEmptyComponent;