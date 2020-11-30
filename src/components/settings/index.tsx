import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { Buttons, Card, NavBar } from '../commons';
import BaseContainNavBar from '../commons/baseContainNavBar';
import I18n from 'i18n-js';
import { setI18nConfig } from '../../i18n';
import { useAppContext } from '../../hooks';
import { LANGUAGE_CHANGE } from '../../context/flux/types';
import utilities from '../../helpers/utilities';
import _styles from './style';
const currentLocale = I18n.currentLocale();
const handleLocaleData = (locale: string) => {
    const handler: any = {
        ['es']: {
            label: I18n.t('global.english'),
            changeParam: 'en'
        },
        ['en']: {
            label: I18n.t('global.spanish'),
            changeParam: 'es'
        }
    }
    return handler[locale] || handler['en'];
}

const onChangeLanguage = (changeParam: string, dispatch: any) => {
    setI18nConfig(changeParam);
    dispatch({ type: LANGUAGE_CHANGE, payload: changeParam })
}
const onSetLocale = async (locale: string) => {
    await utilities.saveLocalData('locale', locale);
}
const onLogout = async (navigation: any) => {
    await utilities.clearLocalData()
    navigation.popToTop()
}
const Settings = (props: any) => {
    const { navigation } = props
    const defaultProfile = require('../../assets/img/profile_default.png');
    const [state, dispatch] = useAppContext();
    const { user = {}, locale = 'en' } = { ...state };
    const { name = '', lastName = '' } = { ...user };
    const { label = '', changeParam = '' } = { ...handleLocaleData(locale) }
    useEffect(() => {
        onSetLocale(locale);
    }, [locale])
    return (
        <View style={_styles.container}>
            <NavBar key={'navbar'} >
                <BaseContainNavBar visibleLeftBtn={false}
                    title={I18n.t('titles.settings')} onBack={() => navigation.goBack()} />
            </NavBar>
            <Card styles={_styles.cardProfile} touchable={false}>
                <View style={_styles.profileInfo}>
                    <Image style={_styles.profileImg} source={defaultProfile} />
                    <View>
                        <Text style={_styles.name}>
                            {`${I18n.t('global.hello')},\n ${name} ${lastName}`}
                        </Text>
                    </View>
                </View>
                <View style={_styles.contianerBtns}>
                    <Buttons.Raised
                        action={() => onChangeLanguage(changeParam, dispatch)}>
                        <Text style={_styles.textChangeLanguage}>{`${I18n.t('global.changeLanguage')} ${label}`}</Text>
                    </Buttons.Raised>
                    <Buttons.Flat action={() => onLogout(navigation)}>
                        <Text style={_styles.texLogout}>
                            {I18n.t('login.logout')}
                        </Text>
                    </Buttons.Flat>
                </View>
            </Card>
        </View>
    )
}

export default Settings;