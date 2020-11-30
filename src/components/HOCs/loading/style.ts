import { StyleSheet } from "react-native";
import { colors } from "../../../config/constants";

const styles = StyleSheet.create({
    loadingContainer: {
        backgroundColor: colors.black,
        opacity: 0.4,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
    }
});
export default styles;