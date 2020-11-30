import React from 'react'
import { FlatList } from 'react-native';
import { Image } from 'react-native-animatable';
import { Card } from '../../../commons';
import _styles from './style';
interface ISuggestionsCarrousel {
    data: Array<any>;
    onDetailSuggest: Function;
}
const SuggestionsCarrousel = ({ data, onDetailSuggest }: ISuggestionsCarrousel) => {
    return (
        <FlatList data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => {
                const { image_url = '' } = { ...item }
                return (
                    <Card styles={_styles.cardStyle} action={() => onDetailSuggest(item)}>
                        <Image style={_styles.imageBook} resizeMode={'center'} source={{ uri: image_url }} />
                    </Card>
                )
            }} />
    )
}
export default SuggestionsCarrousel;