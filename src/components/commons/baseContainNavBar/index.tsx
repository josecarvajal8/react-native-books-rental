import React from 'react'
import { View } from 'react-native';
import { Text } from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import getComponentStyle from '../../../helpers/responsive';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './style';
const _styles = getComponentStyle(styles);
interface IBaseContainNavBar {
    title: string;
    onBack: Function;
}
const BaseContainNavBar = ({ title = '', onBack }: IBaseContainNavBar) => {
    return (
        <View style={_styles.container}>
            <TouchableOpacity style={_styles.backBtn}
                onPress={() => onBack()}>
                <FontAwesome name={'chevron-left'}{..._styles.backIcon} />
            </TouchableOpacity>
            <Text style={_styles.title}>{title}</Text>
            <View style={_styles.nonVisibleBox} />
        </View>
    )
}
export default BaseContainNavBar;