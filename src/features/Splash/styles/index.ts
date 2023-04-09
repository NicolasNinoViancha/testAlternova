import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shadowIOS: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    ctnImage: {
        width: width * 0.25,
        height: width * 0.25,
        borderRadius: 100,
        padding: 10,
        overflow: 'hidden'
    },
    ctnText: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: width * 0.08
    },
    text: {
        marginLeft: width * 0.02,
        fontSize: 20,
        fontWeight: 'bold'
    }
})