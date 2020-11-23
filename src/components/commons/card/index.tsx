import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './style';
import getComponentStyle from '../../../helpers/responsive';
const _styles = getComponentStyle(styles);
interface ICard {
    children: React.ReactNode,
    styles?: { [key: string]: any }
}
const Card = ({ children, styles = {} }: ICard) => {
    return (
        <TouchableOpacity style={{ ..._styles.container, ...styles }}>
            {children}
        </TouchableOpacity>
    )
}
export default Card;