import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const TextBlock = ({title, text, composition}) => {
    return(
        <View style={styles.block} >
            <Text style={styles.block_title}>{title}</Text>
            { text ? (<Text style={styles.block_description}>{text}</Text>) : composition.map(item => <Text key={item} style={styles.block_description}>- {item}</Text>)}
        </View>
    )
}