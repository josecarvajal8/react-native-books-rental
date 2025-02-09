import React from 'react'
import { Image, Text, View } from 'react-native';
import _styles from './style';
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
                <Text style={_styles.bookTitle}>{title}</Text>
                <Text style={_styles.bookAuthor}>{author}</Text>
            </View>
        </View>
    );
}
export default Book;