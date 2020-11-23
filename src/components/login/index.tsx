import React from 'react';
import { View } from 'react-native';
import styles from './style';
import getComponentStyle from '../../helpers/responsive';
import { Form } from './components';
const _styles = getComponentStyle(styles);
const Login = (props: any) => {
    const { navigation = null } = { ...props }
    return (
        <View style={_styles.container}>
            <Form navigation={() => navigation.navigate('Home')} />
        </View >
    )
}
export default Login;