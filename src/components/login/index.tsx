import React from 'react';
import { Text, Vibration, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
const Login = (props: any) => {
    const { navigation = null } = { ...props }
    console.log('hello', props);
    return (
        <View style={styles.container}>
            <Text>{'Hello Login'}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>{'sign in'}</Text>
            </TouchableOpacity>
        </View >
    )
}
export default Login;