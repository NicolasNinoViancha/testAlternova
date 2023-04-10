import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '@src/theme';

const { width } = Dimensions.get('window');

const SIZE_BUTTON = width * 0.08;

export const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    ctnImage: {
        backgroundColor: COLORS.common.gray,
        width: '100%',
        height: width * 0.8,
        padding: width * 0.08
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: COLORS.common.black,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: COLORS.common.black,
        marginBottom: width * 0.02
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
        color: COLORS.common.black,
        marginBottom: width * 0.02
    },
    ctnInfo: {
        width: '100%',
        paddingHorizontal: width * 0.04,
        paddingVertical: width * 0.08
    },
    description: {
        fontSize: 16,
        color: COLORS.common.grayMedium,
        marginBottom: width * 0.04
    },
    ctnDetails: {
        width: width * 0.92,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: width * 0.02
    },
    ctnBtnAdd: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textNumber: {
        fontSize: 16,
        color: COLORS.common.black,
        marginHorizontal: width * 0.03,
        fontWeight: 'bold',
    },
    btnSub: {
        width: SIZE_BUTTON,
        height: SIZE_BUTTON,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.common.green,
        borderWidth: 1,
        borderRadius: 4
    },
    btnAdd: {
        width: SIZE_BUTTON,
        height: SIZE_BUTTON,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.common.green,
        borderRadius: 4
    },
    btnBuy: {
        width: '60%',
        height: width * 0.12,
        backgroundColor: COLORS.common.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginLeft: width * 0.02
    },
    textBtnBuy: {
        fontSize: 16,
        color: COLORS.common.white,
        fontWeight: 'bold'
    }
})