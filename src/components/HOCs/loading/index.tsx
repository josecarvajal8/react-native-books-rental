import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../../config/constants';
import _styles from './style';
const Loading = (Comp: any) =>
    (props: any) => {
        const { loading = false } = { ...props }
        return (
            <>
                <Comp />
                {loading && <View style={_styles.loadingContainer}>
                    <ActivityIndicator size={'large'} color={colors.primary} />
                </View>}
            </>
        )
    }

export default Loading;