import React from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import { mockBooks } from '../../config/constants';
import getComponentStyle from '../../helpers/responsive';
import utilities from '../../helpers/utilities';
import { Buttons, Card, NavBar } from '../commons';
import { CommentsList, SuggestionsCarrousel } from './components';
import styles from './style';
const _styles = getComponentStyle(styles);

const Detail = (props: any) => {
    const { route: { params = {} } = {} } = { ...props };
    const { author = '', title = '', genre = '', year = '', publisher = '', image_url = '', comments = [], id = 0 } = { ...params };
    const suggestions: Array<any> = mockBooks.filter((el: any) => {
        const { id: _id = 0, genre: _genre = '' } = { ...el };
        return (id !== _id) && (genre === _genre)
    })
    const renderCommentsAmount = 2;
    const showViewAll = comments.length > renderCommentsAmount;
    return (
        <ScrollView style={_styles.container} bounces={false}>
            <NavBar key={'navbar'} >
                <View style={_styles.containerNavBar}>
                    <Text>{'DETAIL'}</Text>
                </View>
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
            {utilities.arrayHasItems(suggestions) && <View key={'suggestions'}
                style={_styles.containerSuggestions}>
                <SuggestionsCarrousel data={suggestions} />
            </View>}
            {utilities.arrayHasItems(comments) && <Card key={'comments'}
                styles={showViewAll ? { ..._styles.commentsContainer, ..._styles.commentsContainerHeight } : _styles.commentsContainer}
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