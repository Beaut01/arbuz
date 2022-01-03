import React from 'react';
import { TouchableNativeFeedback, View, Image, Text } from 'react-native';
import { styles } from './styles';

interface IMarmaladeCard {
    onPress: (img: string, description: string, calorie: number, title: string, composition: string[]) => void;
    image: string;
    title: string;
    description: string;
    composition: string[];
    calorie: number;
}
 
export const MarmaladeCard: React.FC<IMarmaladeCard> = ({ onPress, image, title, description, composition, calorie }) => {
    console.log('TEST', image, title, description, composition, calorie);
    return(
        <TouchableNativeFeedback onPress={() => onPress(image, description, calorie, title, composition)}>
            <View style={styles.card}>
                <Image style={styles.card_image} source={{ uri: image}} />
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableNativeFeedback>
    );
}