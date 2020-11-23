import { StyleSheet } from 'react-native';
import { colors } from '../../../../../config/constants';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkBox: {
        width: 18,
        height: 18,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    box: {
        width: 12,
        height: 12,
        backgroundColor: colors.white
    },
    boxFilled: {
        backgroundColor: colors.green_checkbox
    }
});
export default styles;