import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../../../config/constants';
const styles = StyleSheet.create({
    textField: {
        width: 300,
        height: 45,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: colors.gey_input,
        padding: 10,
        color:  colors.primary,
        backgroundColor: colors.white,
        fontFamily: fonts.REGULAR
    }
});
export default styles