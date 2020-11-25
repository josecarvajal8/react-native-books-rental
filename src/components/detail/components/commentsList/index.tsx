import React from 'react'
import { FlatList } from 'react-native';
import { Comment } from '..';
interface ICommentsList {
    data: Array<any>,
    renderElementsAmount?: number,
    scrollable?: boolean
}
const CommentsList = ({ data = [], renderElementsAmount = 0, scrollable = true }: ICommentsList) => {
    const _renderElementsAmount = !!renderElementsAmount ? renderElementsAmount : data.length
    const regulatedData = data.filter((_: any, index: number) => index < _renderElementsAmount);
    return (
        <FlatList data={regulatedData}
            keyExtractor={(_, index) => index.toString()}
            scrollEnabled={scrollable}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                const { user_nick = '', comment_text = '' } = { ...item };
                return (<Comment commentText={comment_text} userName={user_nick} />)
            }} />
    )
}
export default CommentsList;