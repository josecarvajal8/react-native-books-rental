import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './style';
import getComponentStyle from '../../helpers/responsive';
import { Form } from './components';
import { FETCH_DATA } from '../../context/flux/types';
import { FETCH_LOGIN } from './api';
import { useAppContext } from '../../hooks';
import { TokenizerManager } from '../../core/tokenizer';
import utilities from '../../helpers/utilities';
const _styles = getComponentStyle(styles);
const login = async (dispatch: any, payload: any) => {
    const token: string = TokenizerManager.generateToken(payload);
    await dispatch({
        type: FETCH_DATA,
        payload: { request: FETCH_LOGIN({ ...payload, token }), dispatch }
    });
}
const validateLogin = (navigation: any, user: any) => {
    const { token = null } = { ...user }
    if (token) {
        navigation.navigate('Home')
        utilities.saveLocalData('token', token)
    }
}
const Login = (props: any) => {
    const { navigation = null } = { ...props }
    const [state, dispatch] = useAppContext();
    const { user = {} } = { ...state };
    const onLogin = (data: any) => {
        login(dispatch, data)
    }
    useEffect(() => {
        validateLogin(navigation, user)
    }
        , [user]);
    return (
        <View style={_styles.container}>
            <Form onLogin={onLogin} />
        </View >
    )
}
export default Login;