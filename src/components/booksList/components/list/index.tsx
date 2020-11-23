import React from 'react';
import { FlatList } from 'react-native';
import { Book } from '..';
import getComponentStyle from '../../../../helpers/responsive';
import { Card } from '../../../commons';
import styles from './style';
const _styles = getComponentStyle(styles);
interface IList {
    books: Array<any>,
}
const List = ({ books }: IList) => {
    return (
        <FlatList data={books}
            style={_styles.list}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => {
                const { title = '', author = '', image_url = '' } = { ...item }
                return (<Card styles={_styles.cardStyle} key={index}>
                    <Book img={image_url} author={author} title={title} />
                </Card>)
            }
            } />
    )
}
export default List;