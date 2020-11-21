import { StyleSheet } from 'react-native';
import { colors } from '../../../../config/constants';
const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 45,
        borderRadius: 30,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    disabled: {
        opacity: 0.3
    }
});
export default styles;