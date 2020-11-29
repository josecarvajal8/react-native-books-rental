import { StyleSheet } from 'react-native';
import { colors, fonts } from "../../../config/constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.grey_soft,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
    },
    containerModal: {
        width: '70%',
        paddingVertical: 15,
        borderRadius: 7,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    title: {
        fontFamily: fonts.SEMIBOLD,
        color: colors.black,
        fontSize: 20
    },
    message: {
        fontFamily: fonts.REGULAR,
        color: colors.black,
        fontSize: 15,
        marginTop: 10
    },
    button: {
        marginTop: 5
    },
    btnText: {
        fontFamily: fonts.SEMIBOLD,
        color: colors.primary,
        fontSize: 18
    }
})
export default styles;