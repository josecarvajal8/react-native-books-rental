import { colors } from "../../config/constants";

const styles = {
    container: {
        flex: 1,
        backgroundColor: colors.grey_bg
    },
    detailBook: {
        height: 300,
        marginTop: 20,
        marginLeft: 18
    },
    commentsContainer: {
        maxHeight: 300,
        minHeight: 200,
        marginTop: 20,
        marginLeft: 18
    },
    containerSuggestions: {
        marginTop: 20
    },
    commentsContainerHeight: {
        minHeight: 260,
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
        marginLeft: 80,
    }
};
export default styles;