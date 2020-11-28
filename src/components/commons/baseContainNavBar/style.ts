import { colors, fonts } from "../../../config/constants";

const styles = {
    container: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
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
    nonVisibleBox:{
        width: 20
    },
    backIcon:{
        size: 20,
        color: colors.white
    }
}
export default styles;