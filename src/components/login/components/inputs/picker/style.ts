import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../../../config/constants';
const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 50,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: colors.gey_input,
        backgroundColor: colors.white
    },
    btnExpand: {
        marginLeft: 10,
        marginTop: 10
    },
    optionsContainer: {
        marginTop: 10,
        marginBottom: 10
    },
    expandHeight: {
        height: 150,
        borderRadius: 0,
        paddingBottom: 20
    },
    placeHolder: {
        fontFamily: fonts.REGULAR,
        color: colors.primary
    },
    optionText: {
        fontFamily: fonts.REGULAR,
        color: colors.primary
    },
    optionContainer:{
        alignItems: 'center',
        marginBottom: 10
    }
});
export default styles;