import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '10%',
        alignItems: 'center',
        paddingTop: width * 0.4
    },
    ctnSwitchTheme: {
        position: 'absolute',
        top: 0,
        right: '10%',
        zIndex: 10
    },
    ctnImage: {
        width: '100%',
        height: width * 0.25
    },
    ctnForm: {
        width: '100%',
        marginTop: width * 0.1
    },
    ctnBtnSignIn: {
        width: '100%',
        marginTop: width * 0.1
    },
    ctnBtnAuth: {
        width: '100%',
        marginTop: width * 0.04
    },
    ctnInput: {
        marginBottom: width * 0.04
    },
    ctnError: {
        width: '100%'
    },
    error: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})