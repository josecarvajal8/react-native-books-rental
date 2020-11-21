import React from 'react';
import { TextInput } from 'react-native';
import getComponentStyle from '../../../../helpers/responsive';
import styles from './style';
interface ITextField {
    handleChange: Function,
    handleBlur: Function,
    values: any,
    fieldId: string,
    handlerErrors: Function,
    label?: string
}
const _styles = getComponentStyle(styles);
const TextField = ({ handleChange, handleBlur, values, fieldId, handlerErrors, label = '' }: ITextField) => {
    return (<TextInput
        style={_styles.textField}
        onChangeText={handleChange(fieldId)}
        onBlur={
            () => {
                handleBlur(fieldId)
                handlerErrors(values, fieldId)
            }
        }
        placeholder={label}
        value={values[fieldId]}
    />);
}
export default TextField;