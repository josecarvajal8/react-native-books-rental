import React from 'react';
import { SafeAreaView, TouchableOpacity, Image, View } from 'react-native';
import styles from './style';
import getComponentStyle from '../../../helpers/responsive';
import { Text } from 'react-native-animatable';
const _styles = getComponentStyle(styles);
const img = require('../../../assets/img/bc_nav_bar_3x.png');
interface INavBar {
    children: React.ReactNode
}
const NavBar = ({ children }: INavBar) => {
    return (
        <SafeAreaView style={_styles.container}>
            <Image resizeMode={'contain'} style={_styles.navBarImg} source={img} />
            {children}
        </SafeAreaView>
    )
}
export default NavBar;