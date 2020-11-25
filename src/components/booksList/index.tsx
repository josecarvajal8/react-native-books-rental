import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { mockBooks } from '../../config/constants';
import getComponentStyle from '../../helpers/responsive';
import { NavBar } from '../commons';
import { List } from './components';
import styles from './style';
const _styles = getComponentStyle(styles);
const BookList = (props: any) => {
    const { navigation = {} } = { ...props };
    return (
        <View style={_styles.container}>
            <NavBar>
                <View style={_styles.containerNavBar}>
                    <TouchableOpacity style={_styles.backBtn}></TouchableOpacity>
                    <Text>{'LIBRARY'}</Text>
                    <TouchableOpacity style={_styles.searchBtn}></TouchableOpacity>
                </View>
            </NavBar>
            <View style={_styles.containerList}>
                <List books={mockBooks}
                    action={(book: any) => navigation.navigate('Detail', { ...book })} />
            </View>
        </View>
    )
}
export default BookList;