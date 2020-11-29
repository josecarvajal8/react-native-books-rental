import { colors, fonts } from "../../config/constants";

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.grey_bg
    },
    profileInfo: {
        flexDirection: 'row',
        padding: 20
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: colors.primary
    },
    cardProfile: {
        marginTop: 30,
        height: 250
    },
    name: {
        fontFamily: fonts.BOLD,
        fontSize: 30,
        color: colors.black,
        width: 260,
        marginLeft: 20
    },
    contianerBtns: {
        alignItems: 'center'
    },
    textChangeLanguage:{
        fontFamily: fonts.SEMIBOLD,
        fontSize: 18,
        color: colors.white
    },
    texLogout:{
        fontFamily: fonts.SEMIBOLD,
        fontSize: 18,
        color: colors.primary
    }
}
export default styles;