import React, { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { FETCH_DATA } from '../../context/flux/types';
import { useAppContext } from '../../hooks';
import { NavBar } from '../commons';
import { LoadingHoc } from '../HOCs';
import { FETCH_BOOKS } from './api';
import { List, NavBarContain } from './components';
import _styles from './style';
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
    const { books = [], loading = false } = { ...state }
    useEffect(() => {
        getBooks(dispatch)
    }, []);
    const _bookList = useMemo(() => books.filter((el: any) => {
        const { title = '' } = { ...el };
        return title.includes(searchValue)
    }
    ), [books, searchValue])
    const WrappedBookList = LoadingHoc(() =>
            <List books={_bookList}
                action={(book: any) => navigation.navigate('Detail', { ...book })} />
    );
    return (
        <View style={_styles.container}>
            <NavBar>
                <NavBarContain
                    searchValue={searchValue} onChangeSearchValue={setSearchValue} />
            </NavBar>
            <WrappedBookList loading={loading} />
        </View>

    )
}
export default BookList;