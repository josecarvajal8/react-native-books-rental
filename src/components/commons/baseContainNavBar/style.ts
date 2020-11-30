import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../config/constants";
import utilities from "../../../helpers/utilities";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: utilities.isAndroid() ? 20 : 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        zIndex: 200
    },
    backBtn: {
        width: 20,
        height: 20,
    },
    title: {
        fontFamily: fonts.BOLD,
        fontSize: 25,
        color: colors.white
    },
    nonVisibleBox: {
        width: 20
    },
    backIcon: {
        color: colors.white
    }
});
export default styles;