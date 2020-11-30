import React from 'react';
import { View } from 'react-native';
import { NavBar } from '../commons';
import BaseContainNavBar from '../commons/baseContainNavBar';
import I18n from 'i18n-js';
import _styles from './style';
import { CommentsList } from './components';
const Comments = (props: any) => {
    const { route: { params = {} } = {}, navigation } = props
    const { comments = [] } = { ...params };
    return (
        <View style={_styles.container}>
            <NavBar key={'navbar'} >
                <BaseContainNavBar
                    title={I18n.t('titles.comments')} onBack={() => navigation.goBack()} />
            </NavBar>
            <CommentsList data={comments} />
        </View>
    )
}
export default Comments;