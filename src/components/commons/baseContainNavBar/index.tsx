import React from 'react'
import { View } from 'react-native';
import { Text } from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import _styles from './style';
interface IBaseContainNavBar {
    title: string;
    onBack: Function;
    visibleLeftBtn?: boolean;
}
const iconSize = 20;
const BaseContainNavBar = ({ title = '', onBack, visibleLeftBtn = true }: IBaseContainNavBar) => {
    return (
        <View style={_styles.container}>
            <TouchableOpacity style={visibleLeftBtn ? _styles.backBtn : { ..._styles.backBtn, opacity: 0 }}
                onPress={() => onBack()} disabled={!visibleLeftBtn}>
                <FontAwesome name={'chevron-left'}{..._styles.backIcon} size={iconSize} />
            </TouchableOpacity>
            <Text style={_styles.title}>{title}</Text>
            <View style={_styles.nonVisibleBox} />
        </View>
    )
}
export default BaseContainNavBar;