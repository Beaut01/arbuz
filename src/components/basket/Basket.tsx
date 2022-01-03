import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles'

export const Basket = () => {
    return(
        <View style={styles.wrapper}>
            <TouchableOpacity activeOpacity={0.4}> 
                <Text style={styles.text}>Basket</Text>
            </TouchableOpacity>
        </View>
    )
}