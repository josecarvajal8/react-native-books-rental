import React from 'react';
import { Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
const BookList = (props: any) => {
    const { navigation = null } = { ...props };
    return (
        <>
            <Text>{'Hello Books Store'}</Text>
            <TouchableHighlight onPress={() => navigation.navigate('Detail')}>
                <Text>{'go to detail'}</Text>
            </TouchableHighlight>
        </>
    )
}
export default BookList;