import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import _styles from './style';
interface ICard {
    children: React.ReactNode;
    styles?: { [key: string]: any };
    touchable?: boolean,
    action?: Function
}
const Card = ({ children, styles = {}, touchable = true, action = () => null }: ICard) => {
    return (
        touchable ? <TouchableOpacity onPress={() => action()}
            style={{ ..._styles.container, ...styles }}>
            {children}
        </TouchableOpacity> :
            <View style={{ ..._styles.container, ...styles }}>
                {children}
            </View>
    )
}
export default Card;