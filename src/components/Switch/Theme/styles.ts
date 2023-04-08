import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '@src/theme';

const { width } = Dimensions.get('window');
export const SIZE_SWITCH_HEIGHT = width * 0.1,
    SIZE_SWITCH_WIDTH = width * 0.20,
    SIZE_CIRCLE = width * 0.08,
    PADDING = 6;

export const styles = StyleSheet.create({
    container: {
        width: SIZE_SWITCH_WIDTH,
        height: SIZE_SWITCH_HEIGHT,
        justifyContent: 'center',
        borderRadius: 100,
        paddingHorizontal: 6
    },
    circle: {
        width: SIZE_CIRCLE,
        height: SIZE_CIRCLE,
        borderRadius: 100,
        backgroundColor: COLORS.common.white,
        zIndex: 10
    },
    ctnIcons: {
        position: 'absolute',
        left: 6,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        flex: 1,
        alignItems: 'center'
    }
})