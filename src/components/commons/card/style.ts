import { StyleSheet } from 'react-native';
import { colors } from '../../../config/constants';
const styles = StyleSheet.create({
    container: {
        // width: "100%",
        height: 110,
        borderRadius: 8,
        backgroundColor: colors.white,
        shadowColor: colors.shadow_grey,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 10
    }
});
export default styles;