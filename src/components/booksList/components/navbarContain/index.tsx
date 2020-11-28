import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import getComponentStyle from '../../../../helpers/responsive';
import styles from './style';
const _styles = getComponentStyle(styles);
interface INavBarContain {
    searchValue: string;
    onChangeSearchValue: Function;
}
const NavBarContain = ({ searchValue = '', onChangeSearchValue }: INavBarContain) => {
    const [showSearchBar, setShowSearchBar] = useState(false)
    const renderBaseContain = () => {
        return (
            <View
                style={_styles.containerNavBar}>
                <TouchableOpacity style={_styles.backBtn}></TouchableOpacity>
                <Text style={_styles.title}>{'Library'}</Text>
                <TouchableOpacity style={_styles.searchBtn}
                    onPress={() => setShowSearchBar(!showSearchBar)}></TouchableOpacity>
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
                <TouchableOpacity style={_styles.searchBtnIn} onPress={() => onChangeSearchValue('')} />
            </View>
            <TouchableOpacity style={_styles.cancelBtn}
                onPress={() => setShowSearchBar(!showSearchBar)}>
                <Text>{'CANCEL'}</Text>
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