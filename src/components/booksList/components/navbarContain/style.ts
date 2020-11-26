import { colors } from "../../../../config/constants";

const styles = {
    containerNavBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    searchBarNavBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginLeft: 20
    },
    opacityZero: {
        opacity: 0
    },
    searchBar: {
        flexDirection: 'row',
        height: 30,
        width: 300,
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: colors.white
    },
    textField: {
        height: 30,
        width: 250,
        marginLeft: 10,
        marginRight: 10
    },
    searchBtnIn: {
        width: 20,
        height: 20,
        borderWidth: 1,
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
    },
    cancelBtn: {
        marginRight: 20,
        marginTop: 5
    }
}
export default styles;