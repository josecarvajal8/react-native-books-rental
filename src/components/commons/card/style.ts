import { colors } from '../../../config/constants';
const styles = {
    container: {
        width: 380,
        height: 110,
        borderRadius: 8,
        backgroundColor: colors.white,
        justifyContent: 'center',
        ios: {
            shadowColor: colors.shadow_grey,
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 2
        },
        android:{
            elevation: 10
        }
    }
};
export default styles;