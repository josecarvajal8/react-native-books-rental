import React, { useEffect, useState } from 'react';
import { Image, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { colors } from '../../config/constants';
import { FETCH_DATA, WISH_LIST_UPDATE } from '../../context/flux/types';
import { MetricsManager } from '../../core/metrics';
import utilities from '../../helpers/utilities';
import { useAppContext } from '../../hooks';
import { Buttons, Card, Modal, NavBar } from '../commons';
import BaseContainNavBar from '../commons/baseContainNavBar';
import { FETCH_SUGGESTIONS } from './api';
import I18n from 'i18n-js';
import { Comment, SuggestionsCarrousel } from './components';
import _styles from './style';
const getSuggestions = async (dispatch: any, genre: string) => {
    await dispatch({
        type: FETCH_DATA,
        payload: { request: FETCH_SUGGESTIONS(genre), dispatch }
    })
}
const eventsHandler =
    async (eventName: string, properties: any) => await MetricsManager.onLogEvent(eventName, properties);

const renderPreviewComments = (comments: Array<any>) => {
    return (comments.map((el, index: number) => {
        const { comment_text = '', user_nick = '' } = { ...el };
        return index < 2 ? <Comment key={index} commentText={comment_text} userName={user_nick} /> : null
    }
    ));
}
const onWishList = async (book: any, onShowModal: any, onModalInfo: any, dispatch: any) => {
    try {
        const currentWishList = await utilities.getLocalData('wishlist') || [];
        const validation = utilities.arrayHasItems(currentWishList.filter((el: any) => el.id === book.id));
        if (!validation) {
            currentWishList.push(book)
            const newWishList = currentWishList;
            await utilities.saveLocalData('wishlist', newWishList);
            dispatch({ type: WISH_LIST_UPDATE, payload: newWishList });
            const modalPayload = {
                title: I18n.t('detail.bookAdded'),
                message: I18n.t('detail.addedToWishList')
            }
            await MetricsManager.onLogEvent('bookAddedToWishlist', book);
            onModalInfo(modalPayload)
            onShowModal(true)
        } else {
            const modalPayload = {
                title: I18n.t('errors.alreadyInList.title'),
                message: I18n.t('errors.alreadyInList.message')
            }
            onModalInfo(modalPayload)
            onShowModal(true)
        }
    } catch (err) {
        const modalPayload = {
            title: I18n.t('errors.default.title'),
            message: I18n.t('errors.default.message')
        }
        onModalInfo(modalPayload)
        onShowModal(true)
    }

}
const Detail = (props: any) => {
    const [state, dispatch] = useAppContext();
    const { route: { params = {} } = {}, navigation } = props;
    const { author = '', title = '', genre = '', year = '', image_url = '', comments = [], id = 0 } = { ...params };
    const [showModal, setShowModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({});
    const modalAction = () => {
        setShowModal(false);
        setModalInfo({});
    }
    useEffect(() => {
        eventsHandler('detailBook', { title, author, id });
        getSuggestions(dispatch, genre);
    }, [])
    const { suggestions: _suggestions = [], loading = false } = { ...state };
    const suggestions: Array<any> = _suggestions.filter((el: any) => {
        const { id: _id = 0 } = { ...el };
        return id !== _id;
    })
    const renderCommentsAmount = 2;
    const showViewAll = comments.length > renderCommentsAmount;
    const { message = '', title: titleModal = '' } = { ...modalInfo };
    return (
        <>
            {showModal && <Modal btnAction={() => modalAction()} btnText={I18n.t('global.ok')} message={message} title={titleModal} />}
            <ScrollView style={_styles.container} bounces={false}>
                <NavBar key={'navbar'} >
                    <BaseContainNavBar title={I18n.t('titles.detail')} onBack={() => navigation.goBack()} />
                </NavBar>
                <View style={_styles.containerCards}>
                    <Card key={'detailbook'} touchable={false} styles={_styles.detailBook}>
                        <View style={_styles.bookInfoContainer}>
                            <Image style={_styles.bookImg}
                                resizeMode={'contain'}
                                source={{ uri: image_url }} />
                            <View style={_styles.containerTextDetail}>
                                <Text style={_styles.titleText}>{title}</Text>
                                <Text style={_styles.infoText}>{author}</Text>
                                <Text style={_styles.infoText}>{year}</Text>
                                <Text style={_styles.infoText}>{genre}</Text>
                            </View>
                        </View>
                        <View style={_styles.btnsContinaer}>
                            <Buttons.Raised styles={_styles.btnAddWishList}
                                action={async () => await onWishList(params, setShowModal, setModalInfo, dispatch)}>
                                <Text style={_styles.textAdd}>{(I18n.t('detail.addToWishList')).toUpperCase()}</Text>
                            </Buttons.Raised>
                            <Buttons.Raised styles={_styles.btnRent}
                                action={() => console.log('hello rent')}>
                                <Text style={_styles.textRent}>{(I18n.t('detail.rent')).toUpperCase()}</Text>
                            </Buttons.Raised>
                        </View>
                    </Card>
                </View>
                {loading ?
                    <ActivityIndicator style={_styles.activityIndicator} size={'small'} color={colors.primary} /> :
                    utilities.arrayHasItems(suggestions) &&
                        <SuggestionsCarrousel data={suggestions}
                            onDetailSuggest={(book: any) => navigation.push('Detail', { ...book })} />
                    }
                {utilities.arrayHasItems(comments) &&
                    <View style={_styles.containerCards}>
                        <Card key={'comments'}
                            styles={showViewAll ?
                                { ..._styles.commentsContainer, ..._styles.commentsContainerHeight }
                                : _styles.commentsContainer}
                            touchable={false}>
                            {renderPreviewComments(comments)}
                            {showViewAll && <Buttons.Flat action={() => navigation.navigate('Comments', { comments })} styles={_styles.btnViewAll}>
                                <Text style={_styles.textViewAll}>{(I18n.t('detail.viewAll'))}</Text>
                            </Buttons.Flat>}
                        </Card>
                    </View>}
            </ScrollView>
        </>
    )
}
export default Detail;