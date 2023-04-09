import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '@src/theme';

const { width, height } = Dimensions.get('window');

const SIZE_TAP = width * 0.12;

export const styles = StyleSheet.create({
    container: {
        width,
        height: height * 0.1,
        justifyContent: 'space-around',
        alignItems: 'center',
        overflow: 'hidden',
        flexDirection: 'row',
        backgroundColor: COLORS.common.white,
        borderColor: COLORS.common.gray,
        borderTopWidth: 2,
    }
})

export const stylesButtonTap = StyleSheet.create({
    container: {
        height: SIZE_TAP,
        width: SIZE_TAP,
        justifyContent: 'center',
        alignItems: 'center'
    }
})