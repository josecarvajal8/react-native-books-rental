import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import _styles from './style';
interface IFlatButton {
    children: React.ReactNode
    styles?: any,
    disabled?: boolean,
    action: Function
}
const { opacity = 1 } = { ..._styles.disabled }
const FlatButton = ({ children, styles = _styles.container, action, disabled = false }: IFlatButton) => {
    return (
        <TouchableOpacity disabled={disabled}
            onPress={() => action()}
            style={disabled ? { ..._styles.container,...styles, opacity } : {..._styles.container,...styles}}>
            {children}
        </TouchableOpacity>
    )
}
export default FlatButton;