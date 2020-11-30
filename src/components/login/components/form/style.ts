import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../../../config/constants';
const styles = StyleSheet.create({
    containerInput: {
        marginBottom: 30
    },
    error: {
        fontFamily: fonts.SEMIBOLD,
        color: colors.red_error,
        opacity: 0.5
    },
    loginText:{
        fontFamily: fonts.SEMIBOLD,
        color: colors.white
    },
    container:{
        flex: 1
    }
});
export default styles