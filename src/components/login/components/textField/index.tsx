import React from 'react';
import { TextInput } from 'react-native';
import getComponentStyle from '../../../../helpers/responsive';
import styles from './style';
const _styles = getComponentStyle(styles);
interface ITextField {
    handleChange: Function;
    handleBlur: Function;
    values: any;
    fieldId: string;
    handlerErrors: Function;
    label?: string;
    disable?: boolean;
}
const TextField = ({ handleChange, handleBlur, values, fieldId, handlerErrors, label = '', disable = false }: ITextField) => {
    return (<TextInput
        style={_styles.textField}
        onChangeText={handleChange(fieldId)}
        onBlur={
            () => {
                handleBlur(fieldId)
                handlerErrors(values, fieldId)
            }
        }
        editable={!disable}
        placeholder={label}
        value={values[fieldId]}
    />);
}
export default TextField;