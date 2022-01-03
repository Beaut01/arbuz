import React from 'react';
import { View, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import { MarmaladeCard } from '../marmalade/MarmaladeCard';
import { styles } from './styles'
import { DATA } from '../../../data';

export const MainPage = ({ navigation }) => {

    const moveToMarmaladePage = (img: string, description: string, calorie: number, title: string, composition: string[]) => {
        navigation.navigate('Marmalade', { image: img, description: description, calorie: calorie, title: title, composition: composition })
    }

    return(
        <FlatList
            contentContainerStyle={{justifyContent: 'space-between'}}
            data={DATA}
            numColumns={2}
            keyExtractor={item=> item.id.toString()}
            renderItem={({item}) => <MarmaladeCard onPress={moveToMarmaladePage} {...item} />} 
        />
    )
}