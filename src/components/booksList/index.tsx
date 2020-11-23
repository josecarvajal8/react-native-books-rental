import React from 'react';
import { Text, View } from 'react-native';
import { mockBooks } from '../../config/constants';
import getComponentStyle from '../../helpers/responsive';
import { Card, NavBar } from '../commons';
import { List } from './components';
import styles from './style';
const _styles = getComponentStyle(styles);
const BookList = (props: any) => {
    return (
        <View style={_styles.container}>
            {/* <Text>{'Hello Books Store'}</Text>
            <TouchableHighlight onPress={() => navigation.navigate('Detail')}>
                <Text>{'go to detail'}</Text>
            </TouchableHighlight> */}
            <NavBar />
            <View style={_styles.containerList}>
                <List books={mockBooks} />
            </View>
        </View>
    )
}
export default BookList;