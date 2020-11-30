import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import _styles from './style';
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