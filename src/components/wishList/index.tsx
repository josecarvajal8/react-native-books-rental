import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { NavBar } from '../commons';
import BaseContainNavBar from '../commons/baseContainNavBar';
import I18n from 'i18n-js';
import _styles from './style';
import { List } from '../booksList/components';
import { useAppContext } from '../../hooks';
const WishList = (props: any) => {
    const [state] = useAppContext();
    const { wishlist = [] } = { ...state };
    useEffect(() => {
    }, [wishlist]);
    const { navigation } = props
    return (
        <View style={_styles.container}>
            <NavBar key={'navbar'} >
                <BaseContainNavBar onBack={() => null} title={I18n.t('titles.wishlist')} visibleLeftBtn={false} />
            </NavBar>
                <List books={wishlist}
                    action={(book: any) => navigation.navigate('Detail', { ...book })} />
        </View>
    )
}

export default WishList;