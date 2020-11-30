import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../../config/constants";
import utilities from "../../../../helpers/utilities";

const styles = StyleSheet.create({
    containerNavBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: utilities.isAndroid() ? 20 : 5,
        paddingHorizontal: 20,
        zIndex: 200
    },
    searchBarNavBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: utilities.isAndroid() ? 20 : 5,
        marginLeft: 20,
        zIndex: 200
    },
    opacityZero: {
        opacity: 0
    },
    searchBar: {
        flexDirection: 'row',
        height: 30,
        width: '75%',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: colors.white
    },
    textField: {
        height: utilities.isAndroid() ? 50 : 30,
        width: '85%',
        marginLeft: 10,
        marginRight: 10
    },
    searchBtnIn: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navBarBtn: {
        width: 20,
        height: 20
    },
    cancelBtn: {
        marginRight: 20,
        marginTop: 5
    },
    title: {
        fontFamily: fonts.BOLD,
        fontSize: 25,
        color: colors.white
    },
    searchIcon: {
        color: colors.white,
    },
    closeIcon: {
        color: colors.gey_input,
    },
    cancelText: {
        fontFamily: fonts.SEMIBOLD,
        fontSize: 18,
        color: colors.white
    }
});
export default styles;