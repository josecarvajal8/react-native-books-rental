import React from 'react';
import { TextInput } from 'react-native';
interface ITextField {
    handleChange: Function,
    handleBlur: Function,
    values: any,
    fieldId: string
}
const TextField = ({ handleChange, handleBlur, values, fieldId }: ITextField) => {
    return (<TextInput
        style={{ width: 100, height: 20, borderWidth: 1 }}
        onChangeText={handleChange(fieldId)}
        onBlur={handleBlur(fieldId)}
        value={values[fieldId]}
    />);
}
export default TextField;