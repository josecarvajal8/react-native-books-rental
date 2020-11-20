import React from 'react';
import { Text, Vibration, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
import getComponentStyle from '../../helpers/responsive';
const _styles = getComponentStyle(styles);
const Login = (props: any) => {
    const { navigation = null } = { ...props }
    return (
        <View style={styles.container}>
            <Text>{'Hello Login'}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>{'sign in'}</Text>
            </TouchableOpacity>
            <View style={_styles.box1} />
        </View >
    )
}
export default Login;