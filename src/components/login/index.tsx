import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import _styles from './style';
import { Form } from './components';
import { FETCH_DATA } from '../../context/flux/types';
import { FETCH_LOGIN } from './api';
import { useAppContext } from '../../hooks';
import { TokenizerManager } from '../../core/tokenizer';
import utilities from '../../helpers/utilities';
import { LoadingHoc } from '../HOCs';
import { Image, Text } from 'react-native-animatable';
import I18n from 'i18n-js';
import { ScrollView } from 'react-native-gesture-handler';
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
    const logo = require('../../assets/img/logo.jpg')
    const onLogin = (data: any) => {
        login(dispatch, data)
    }
    useEffect(() => {
        validateLogin(navigation, user)
    }
        , [user]);
    const WrappedLogin = LoadingHoc(
        () => {
            return (
                <SafeAreaView style={_styles.container}>
                    <ScrollView style={_styles.container}>
                        <View style={_styles.containerLogo}>
                            <Image style={_styles.logo} source={logo} />
                            <Text style={_styles.welcome}>{I18n.t('global.welcome')}</Text>
                        <Form onLogin={onLogin} />
                        </View>
                    </ScrollView >
                </SafeAreaView>
            )
        });
    const { loading = false } = { ...state };
    return (
        <WrappedLogin {...props} loading={loading} />
    )

}
export default Login;