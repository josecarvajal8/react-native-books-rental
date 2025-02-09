import React from 'react';
import { View, Image, Text } from 'react-native';
import _styles from './style';
interface IComment {
    userName: string;
    commentText: string;
}
const Comment = ({ userName = '', commentText = '' }: IComment) => {
    const profileImg = require('./../../../../assets/img/default_profile.png')
    return (
        <View style={_styles.container}>
            <Image source={profileImg} style={_styles.img} />
            <View style={_styles.containerInfo}>
                <Text style={_styles.userName}>
                    {userName}
                </Text>
                <Text style={_styles.commentText} numberOfLines={4}>
                    {commentText}
                </Text>
            </View>
        </View>
    )
}
export default Comment;