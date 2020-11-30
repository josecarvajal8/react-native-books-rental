import { StyleSheet } from 'react-native';
import { colors } from '../../../../config/constants';
const styles = StyleSheet.create({
    container: {
        height: 45,
        borderRadius: 30,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    disabled: {
        opacity: 0.3
    }
});
export default styles;