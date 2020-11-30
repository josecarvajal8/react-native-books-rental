import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../../config/constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20,
        maxHeight: 120,
        width: '80%'
    },
    img: {
        width: 60,
        height: 60
    },
    containerInfo: {
        marginLeft: 20
    },
    commentText: {
        fontFamily: fonts.REGULAR,
        fontSize: 15,
        width: '30%',
        marginTop: 3
    },
    userName: {
        fontFamily: fonts.SEMIBOLD,
        fontSize: 15,
        color: colors.black
    }
});
export default styles;