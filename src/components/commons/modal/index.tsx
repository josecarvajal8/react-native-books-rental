import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-animatable';
import { Buttons } from '..';
import _styles from './style';
interface IModal {
    title: string;
    message: string;
    btnAction: Function;
    btnText: string;
}
const Modal = ({ title, message, btnAction, btnText }: IModal) => {
    return (
        <View style={_styles.container}>
            <View style={_styles.containerModal}>
                <Text style={_styles.title}>
                    {title}
                </Text>
                <Text style={_styles.message}>
                    {message}
                </Text>
                <Buttons.Flat styles={_styles.button}
                action={() => btnAction()}>
                    <Text style={_styles.btnText}>{btnText}</Text>
                </Buttons.Flat>
            </View>
        </View>
    )
}
export default Modal;