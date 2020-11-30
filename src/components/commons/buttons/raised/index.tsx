import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import _styles from './style';
interface IRaisedButton {
    children: React.ReactNode
    styles?: any,
    disabled?: boolean,
    action: Function
}
const RaisedButton = ({ children, styles = _styles.container, action, disabled = false }: IRaisedButton) => {
    return (
        <TouchableOpacity disabled={disabled}
            onPress={() => action()}
            style={{ ..._styles.container, ...styles }}>
            {children}
        </TouchableOpacity>
    )
}
export default RaisedButton;