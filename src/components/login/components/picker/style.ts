import { StyleSheet } from 'react-native';
import { colors } from '../../../../config/constants';
const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 50,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: colors.gey_input
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
    }
});
export default styles;