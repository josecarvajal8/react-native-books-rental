import React from 'react';
import { FlatList } from 'react-native';
import { Book } from '../../../commons';
import { Card } from '../../../commons';
import _styles from './style';
interface IList {
    books: Array<any>,
    action?: Function
}
const List = ({ books, action = () => null }: IList) => {
    return (
        <FlatList data={books}
            style={_styles.list}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
                const { title = '', author = '', image_url = '' } = { ...item }
                return (<Card styles={_styles.cardStyle} key={index} action={() => action(item)}>
                    <Book img={image_url} author={author} title={title} />
                </Card>)
            }
            } />
    )
}
export default List;