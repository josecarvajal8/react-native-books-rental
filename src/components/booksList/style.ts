import { StyleSheet } from "react-native";
import { colors } from "../../config/constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.grey_bg
    },
    containerList: {
        marginTop: 20,
        justifyContent: 'center'
    },
    containerNavBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    backBtn: {
        width: 20,
        height: 20,
        borderWidth: 1,
        marginLeft: 20
    },
    searchBtn: {
        width: 20,
        height: 20,
        borderWidth: 1,
        marginRight: 20
    }
});
export default styles;