import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/constants';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey_bg,
        paddingHorizontal: 20
    },
    containerLogo:{
        alignItems: 'center'
    },
    logo: {
        marginTop: 20,
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 10
    },
    welcome: {
        fontFamily: fonts.BOLD,
        fontSize: 20,
        marginBottom: 20
    }
});

export default styles;