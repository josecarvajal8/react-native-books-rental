import React, { useEffect } from 'react';
import { Image, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { colors } from '../../config/constants';
import { FETCH_DATA } from '../../context/flux/types';
import { MetricsManager } from '../../core/metrics';
import getComponentStyle from '../../helpers/responsive';
import utilities from '../../helpers/utilities';
import { useAppContext } from '../../hooks';
import { Buttons, Card, NavBar } from '../commons';
import BaseContainNavBar from '../commons/baseContainNavBar';
import { FETCH_SUGGESTIONS } from './api';
import { CommentsList, SuggestionsCarrousel } from './components';
import styles from './style';
const _styles = getComponentStyle(styles);
const getSuggestions = async (dispatch: any, genre: string) => {
    await dispatch({
        type: FETCH_DATA,
        payload: { request: FETCH_SUGGESTIONS(genre), dispatch }
    })
}
const eventsHandler = async (eventName: string, properties: any) => {
    await MetricsManager.onLogEvent(eventName, properties)
}
const Detail = (props: any) => {
    const [state, dispatch] = useAppContext();
    const { route: { params = {} } = {}, navigation } = props;
    const { author = '', title = '', genre = '', year = '', image_url = '', comments = [], id = 0 } = { ...params };
    useEffect(() => {
        eventsHandler('detail-book', { title, author, id });
        getSuggestions(dispatch, genre);
    }, [])
    const { suggestions: _suggestions = [], loading = false } = { ...state };
    const suggestions: Array<any> = _suggestions.filter((el: any) => {
        const { id: _id = 0 } = { ...el };
        return id !== _id;
    })
    const renderCommentsAmount = 2;
    const showViewAll = comments.length > renderCommentsAmount;
    return (
        <ScrollView style={_styles.container} bounces={false}>
            <NavBar key={'navbar'} >
                <BaseContainNavBar title={'DETAIL'} onBack={() => navigation.goBack()} />
            </NavBar>
            <Card key={'detailbook'} touchable={false} styles={_styles.detailBook}>
                <View style={_styles.bookInfoContainer}>
                    <Image style={_styles.bookImg}
                        resizeMode={'contain'}
                        source={{ uri: image_url }} />
                    <View style={_styles.containerTextDetail}>
                        <Text>{title}</Text>
                        <Text>{author}</Text>
                        <Text>{year}</Text>
                        <Text>{genre}</Text>
                    </View>
                </View>
                <View style={_styles.btnsContinaer}>
                    <Buttons.Raised styles={_styles.btnAddWishList}
                        action={() => console.log('hello add')}>
                        <Text>{'ADD TO WISHLIST'}</Text>
                    </Buttons.Raised>
                    <Buttons.Raised styles={_styles.btnRent}
                        action={() => console.log('hello rent')}>
                        <Text>{'RENT'}</Text>
                    </Buttons.Raised>
                </View>
            </Card>
            {loading ?
                <ActivityIndicator style={_styles.activityIndicator} size={'small'} color={colors.primary} /> :
                utilities.arrayHasItems(suggestions) &&
                <View key={'suggestions'}
                    style={_styles.containerSuggestions}>
                    <SuggestionsCarrousel data={suggestions}
                        onDetailSuggest={(book: any) => navigation.push('Detail', { ...book })} />
                </View>}
            {utilities.arrayHasItems(comments) && <Card key={'comments'}
                styles={showViewAll ?
                    { ..._styles.commentsContainer, ..._styles.commentsContainerHeight }
                    : _styles.commentsContainer}
                touchable={false}>
                <View style={_styles.containerCommentsList}>
                    <CommentsList data={comments} renderElementsAmount={renderCommentsAmount} scrollable={false} />
                </View>
                {showViewAll && <Buttons.Flat action={() => console.log('view all')} styles={_styles.btnViewAll}>
                    <Text>{'View All'}</Text>
                </Buttons.Flat>}
            </Card>}
        </ScrollView>
    )
}
export default Detail;