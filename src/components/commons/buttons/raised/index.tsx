import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import getComponentStyle from '../../../../helpers/responsive';
import styles from './style';
interface IRaisedButton {
    children: React.ReactNode
    styles?: any,
    disabled?: boolean,
    action: Function
}
const _styles = getComponentStyle(styles);
const { opacity = 1 } = { ..._styles.disabled }
const RaisedButton = ({ children, styles = _styles.container, action, disabled = false }: IRaisedButton) => {
    return (
        <TouchableOpacity disabled={disabled}
            onPress={() => action()}
            style={disabled ? { ..._styles.container,...styles, opacity } : {..._styles.container,...styles}}>
            {children}
        </TouchableOpacity>
    )
}
export default RaisedButton;