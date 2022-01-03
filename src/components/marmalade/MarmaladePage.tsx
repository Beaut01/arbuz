import React from 'react';
import { TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';
import { TextBlock } from '../common/text_block/TextBlock';
import { styles } from './styles';

export const Marmalade = ({ route }) => {
    const { image, description, calorie, title, composition } = route.params;
    console.log('TEST2', image, description, calorie, title);
    return (
        <ScrollView style={styles.wrapper}>
            <Image style={styles.image} source={{uri: image}} />
            { !!description && <TextBlock title='Вкусовые характеристики' text={description} composition={null} /> }
            { composition.length && <TextBlock title='Состав' composition={composition} text={null} /> }
            { !!calorie && <TextBlock title='Калорийность' text={calorie} composition={null} /> }
        </ScrollView>
    );
}