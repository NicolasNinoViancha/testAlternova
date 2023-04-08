import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: width * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})