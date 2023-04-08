import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    viewInput: {
        height: width * 0.1,
        width: '100%',
        borderWidth: 1,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width * 0.04,
    },
    ctnInput: {
        flex: 1,
        marginLeft: width * 0.02
    },
    input: {
        fontSize: 16,
    },
    ctnError: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: width * 0.02
    },
    error: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 8
    }
})