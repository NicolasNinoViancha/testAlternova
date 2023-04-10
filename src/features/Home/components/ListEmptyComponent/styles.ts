import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from '@src/theme';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height * 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ctnLoading: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLoading: {
        fontWeight: 'bold',
        fontSize: 20,
        color: COLORS.common.black,
        marginLeft: width * 0.02
    }
})