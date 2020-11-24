import React from 'react';
import { Image, Text, View } from 'react-native';
import getComponentStyle from '../../helpers/responsive';
import { Buttons, Card, NavBar } from '../commons';
import styles from './style';
const _styles = getComponentStyle(styles);

const Detail = (props: any) => {
    const { route: { params = {} } = {} } = { ...props };
    const { author = '', title = '', genre = '', year = '', publisher = '', image_url = '' } = { ...params };
    return (
        <View style={_styles.container}>
            <NavBar />
            <Card touchable={false} styles={_styles.detailBook}>
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
            <Card styles={_styles.commentsContainer}>
                <Text>
                    {'Comments'}
                </Text>
            </Card>
        </View>
    )
}
export default Detail;