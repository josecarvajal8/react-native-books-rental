import React, { useRef, useState } from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import getComponentStyle from '../../../../helpers/responsive';
import styles from './style';
const _styles = getComponentStyle(styles);
export interface IOption {
    value: string;
    label: string;
}
interface IPicker {
    options: IOption[],
    value: string,
    setFieldValue: Function,
    fieldId: string,
    label: string
}
const PickerField = ({ value, setFieldValue, fieldId, options, label }: IPicker) => {
    const optionsListRef = useRef(null);
    const selectOption = (itemValue: any) => {
        setFieldValue(fieldId, itemValue)
    }
    const showValue = options.find((el) => el.value === value);
    const { label: _selectedValue = '' } = { ...showValue };
    const [isExpand, setExpand] = useState(false)
    const expandList = () => {
        const { current = {} } = { ...optionsListRef }
        isExpand ? (current as any).transitionTo(_styles.container) :
            (current as any).transitionTo({ ..._styles.container, ..._styles.expandHeight });
        setExpand(!isExpand);
    }
    const renderOptions = () => {
        return (
            <FlatList data={options} renderItem={({ item, index }) => {
                const { label, value } = { ...item };
                return (
                    <TouchableOpacity
                        key={value}
                        onPress={() => selectOption(value)}>
                        <Text>{label}</Text>
                    </TouchableOpacity>
                )
            }} />
        )
    }
    return (
        <Animatable.View style={_styles.container} ref={optionsListRef}>
            <TouchableOpacity
                style={_styles.btnExpand}
                onPress={() => expandList()}>
                <Text>{!!_selectedValue ? _selectedValue : label}</Text>
            </TouchableOpacity>
            <View style={_styles.optionsContainer}>
                {isExpand && renderOptions()}
            </View>
        </Animatable.View>
    );
}
export default PickerField;