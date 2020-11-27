import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './style';
import getComponentStyle from '../../helpers/responsive';
import { Form } from './components';
import { FETCH_DATA } from '../../context/flux/types';
import { FETCH_LOGIN } from './api';
import { useAppContext } from '../../hooks';
const _styles = getComponentStyle(styles);
const login = async (dispatch: any, payload: any) => {
    await dispatch({
        type: FETCH_DATA,
        payload: { request: FETCH_LOGIN(payload), dispatch }
    });
}
const validateLogin = (navigation: any) => {
    navigation.navigate('Home')
}
const Login = (props: any) => {
    const { navigation = null } = { ...props }
    const [state, dispatch] = useAppContext();
    const { user = {} } = { ...state };
    const onLogin = (data: any) => {
        login(dispatch, data)
    }
    useEffect(() => {
        user && validateLogin(navigation)
    }
        , [user]);
    return (
        <View style={_styles.container}>
            <Form onLogin={onLogin} />
        </View >
    )
}
export default Login;