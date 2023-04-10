import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '@src/theme';

const { width, height } = Dimensions.get('window');

const SIZE_IMAGE = width * 0.22,
    SIZE_CARD = width * 0.28,
    SIZE_BUTTON = width * 0.06;

export const styles = StyleSheet.create({
    container: {
        width,
        height: SIZE_CARD,
        paddingVertical: width * 0.03,
        paddingHorizontal: width * 0.04,
        backgroundColor: COLORS.common.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: COLORS.common.gray,
        borderBottomWidth: 1,
    },
    ctnImage: {
        width: SIZE_IMAGE,
        height: SIZE_IMAGE,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        overflow: 'hidden',
        backgroundColor: '#F6F6F6',
        borderRadius: 8
    },
    details: {
        flex: 1,
        marginHorizontal: width * 0.05,
        height: '100%',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        color: COLORS.common.black,
        marginBottom: width * 0.02
    },
    textPrice: {
        fontWeight: 'bold',
        fontSize: 16,
        color: COLORS.common.black
    },
    textStock: {
        fontSize: 14,
        color: COLORS.common.grayMedium,
        marginBottom: width * 0.02,
        fontWeight: 'bold',
    },
    viewBtnAdd: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    ctnBtnAdd: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textNumber: {
        fontSize: 12,
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
    }
})