import React, { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { mockBooks } from '../../config/constants';
import { ConnectorManager } from '../../connector';
import { FETCH_DATA } from '../../core/context/flux/types';
import getComponentStyle from '../../helpers/responsive';
import { useAppContext } from '../../hooks';
import { NavBar } from '../commons';
import { FETCH_BOOKS } from './api';
import { List, NavBarContain } from './components';
import styles from './style';
const _styles = getComponentStyle(styles);
const getBooks = async (dispatch: any) => {
    await dispatch({
        type: FETCH_DATA,
        payload: { request: FETCH_BOOKS, dispatch },
    });
}
const BookList = (props: any) => {
    const [state, dispatch] = useAppContext();
    const { navigation = {} } = { ...props };
    const [searchValue, setSearchValue] = useState('');
    const { books = [] } = { ...state }
    useEffect(() => {
        getBooks(dispatch)
    }, []);
    const _bookList = useMemo(() => books.filter((el: any) => {
        const { title = '' } = { ...el };
        return title.includes(searchValue)
    }
    ), [books, searchValue])
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