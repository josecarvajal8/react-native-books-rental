import React from 'react';
import { TextInput, View } from 'react-native';
import { colors } from '../../../../../config/constants';
import I18n from 'i18n-js';
import _styles from './style';
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
    return (
            <TextInput
                style={_styles.textField}
                onChangeText={handleChange(fieldId)}
                placeholderTextColor={colors.primary}
                onBlur={
                    () => {
                        handleBlur(fieldId)
                        handlerErrors(values, fieldId)
                    }
                }
                onFocus={() => handlerErrors(values, fieldId)}
                editable={!disable}
                placeholder={I18n.t(label)}
                value={values[fieldId]}
            />
        );
}
export default TextField;