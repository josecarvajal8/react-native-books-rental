import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import I18n from 'i18n-js';
import _styles from './style';
interface INavBarContain {
    searchValue: string;
    onChangeSearchValue: Function;
}
const NavBarContain = ({ searchValue = '', onChangeSearchValue}: INavBarContain) => {
    const [showSearchBar, setShowSearchBar] = useState(false)
    const iconSize = 20;
    const renderBaseContain = () => {
        return (
            <View
                style={_styles.containerNavBar}>
                <TouchableOpacity style={_styles.navBarBtn}>
                    <FontAwesome name={'bell'} {..._styles.searchIcon} size={iconSize} />
                </TouchableOpacity>
                <Text style={_styles.title}>{I18n.t('titles.library')}</Text>
                <TouchableOpacity style={_styles.navBarBtn}
                    onPress={() => setShowSearchBar(!showSearchBar)}>
                    <FontAwesome name={'search'} {..._styles.searchIcon} size={iconSize} />
                </TouchableOpacity>
            </View >
        )
    }

    const renderSearchBar = () => {
        return (
            <View
                style={_styles.searchBarNavBar}>
                <View style={_styles.searchBar}>
                    <TextInput
                        value={searchValue}
                        onChangeText={(text) =>
                            onChangeSearchValue(text)}
                        style={_styles.textField} />
                    <TouchableOpacity style={_styles.searchBtnIn} onPress={() => onChangeSearchValue('')} >
                    <FontAwesome name={'close'} {..._styles.closeIcon} size={iconSize} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={_styles.cancelBtn}
                    onPress={() => setShowSearchBar(!showSearchBar)}>
                    <Text style={_styles.cancelText}>{I18n.t('global.cancel')}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <>
            {!showSearchBar && renderBaseContain()}
            {showSearchBar && renderSearchBar()}
        </>
    )
}
export default NavBarContain