import React, { useMemo, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { mockBooks } from '../../config/constants';
import getComponentStyle from '../../helpers/responsive';
import { NavBar } from '../commons';
import { List, NavBarContain } from './components';
import styles from './style';
const _styles = getComponentStyle(styles);
const BookList = (props: any) => {
    const { navigation = {} } = { ...props };
    const [searchValue, setSearchValue] = useState('');
    const _bookList = useMemo(() => mockBooks.filter((el: any) => {
        const { title = '' } = { ...el };
        return title.includes(searchValue)
    }
    ), [mockBooks, searchValue])
    return (
        <View style={_styles.container}>
            <NavBar>
                <NavBarContain searchValue={searchValue} onChangeSearchValue={setSearchValue} />
            </NavBar>
            <View style={_styles.containerList}>
                <List books={_bookList}
                    action={(book: any) => navigation.navigate('Detail', { ...book })} />
            </View>
        </View>
    )
}
export default BookList;