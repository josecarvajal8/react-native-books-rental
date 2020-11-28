import { color } from "react-native-reanimated";
import { colors, fonts } from "../../../config/constants";

const styles = {
    container: {
        flexDirection: 'row',
    },
    image: {
        width: 50,
        height: 80,
        marginLeft: 30
    },
    infoContainer: {
        marginLeft: 20,
        marginTop: 5
    },
    bookTitle: {
        fontFamily: fonts.SEMIBOLD,
        fontSize: 18,
        color: colors.black,
    },
    bookAuthor: {
        fontFamily: fonts.REGULAR,
        fontSize: 15,
        color: colors.black,
    }
};
export default styles;