import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import getComponentStyle from '../../../../../helpers/responsive';
import styles from './style';
const _styles = getComponentStyle(styles);
interface ICheckBox {
    label: string;
    value: boolean;
    onChangeValue: Function;
    fieldId: string;
}
const CheckBox = ({ label = '', value = false, onChangeValue, fieldId }: ICheckBox) => {
    const setCheckBoxValue = () => {
        onChangeValue(fieldId, !value);
    }
    return (
        <View style={_styles.container}>
            <TouchableOpacity
                style={_styles.checkBox}
                onPress={() => setCheckBoxValue()} >
                <View style={value ? { ..._styles.box, ..._styles.boxFilled } : _styles.box} />
            </TouchableOpacity>
            <Text>
                {label}
            </Text>
        </View>
    )
}

export default CheckBox;