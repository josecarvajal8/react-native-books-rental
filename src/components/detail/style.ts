import { colors } from "../../config/constants";

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.grey_bg
    },
    detailBook: {
        height: 300,
        marginTop: 20
    },
    commentsContainer:{
        height: 300,
        marginTop: 20
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
    btnsContinaer:{
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
    }
};
export default styles;