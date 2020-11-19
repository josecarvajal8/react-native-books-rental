import React from 'react';
import { Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { NativeScreen } from 'react-native-screens';
const Home = (props: any) => {
    const { navigation = null } = { ...props };
    return (
        <>
            <Text>{'Hello Home'}</Text>
            <TouchableHighlight onPress={() => navigation.navigate('Detail')}>
                <Text>{'go to detail'}</Text>
            </TouchableHighlight>
        </>
    )
}
export default Home;