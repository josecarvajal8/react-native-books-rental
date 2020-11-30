import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/constants";
import utilities from "../../helpers/utilities";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey_bg,
    },
    containerCards: {
        width: "100%",
        alignItems: 'center'
    },
    mBottom:{
        marginBottom: utilities.isAndroid() ? 80 : 20
    },
    detailBook: {
        height: 300,
        marginTop: 20,
        width: "90%"
    },
    commentsContainer: {
        height: 250,
        marginTop: 20,
        width: "90%"
    },
    containerSuggestions: {
        marginTop: 20
    },
    commentsContainerHeight: {
        minHeight: 300,
    },
    containerCommentsList: {
        height: 180
    },
    bookInfoContainer: {
        flexDirection: 'row'
    },
    bookImg: {
        marginTop: 20,
        width: 100,
        height: 130,
        marginLeft: 30
    },
    containerTextDetail: {
        marginLeft: 20,
        marginTop: 20
    },
    btnsContinaer: {
        marginLeft: 30
    },
    btnAddWishList: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: colors.primary,
        marginTop: 30,
        backgroundColor: colors.white
    },
    btnRent: {
        width: 300,
        height: 40,
        marginTop: 15
    },
    btnViewAll: {
        marginTop: 20,
        marginLeft: 30
    },
    activityIndicator: {
        marginTop: 20
    },
    titleText: {
        fontFamily: fonts.SEMIBOLD,
        fontSize: 20,
        color: colors.black
    },
    infoText: {
        fontFamily: fonts.REGULAR,
        fontSize: 15,
        color: colors.gey_input,
        marginTop: 2
    },
    textAdd: {
        fontFamily: fonts.SEMIBOLD,
        fontSize: 18,
        color: colors.primary
    },
    textRent: {
        fontFamily: fonts.SEMIBOLD,
        fontSize: 18,
        color: colors.white
    },
    textViewAll: {
        fontFamily: fonts.REGULAR,
        fontSize: 15,
        color: colors.primary
    }
});
export default styles;