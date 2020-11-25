import React from 'react'
import { Image, Text, View } from 'react-native';
import getComponentStyle from '../../../helpers/responsive';
import styles from './style';
const _styles = getComponentStyle(styles);
interface IBook {
    title: string;
    author: string;
    img: string;
}
const Book = ({ title, author, img }: IBook) => {
    return (
        <View style={_styles.container}>
            <Image style={_styles.image}
                resizeMode={'contain'}
                source={{ uri: img }} />
            <View style={_styles.infoContainer}>
                <Text>{title}</Text>
                <Text>{author}</Text>
            </View>
        </View>
    );
}
export default Book;