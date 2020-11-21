import React from 'react';
import { Text, Vibration, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
import getComponentStyle from '../../helpers/responsive';
import { Form } from './components';
const _styles = getComponentStyle(styles);
const Login = (props: any) => {
    const { navigation = null } = { ...props }
    return (
        <View style={styles.container}>
            <Form />
        </View >
    )
}
export default Login;