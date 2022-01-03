import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },

    text: {
        fontSize: 18,
        color: '#000',
        padding: 10
    },

    card: {
        flex: 1,
        padding: 5,
        elevation: 8,
        backgroundColor: '#fff',
        marginVertical: 5,
        marginHorizontal: 2,
        borderRadius: 5
    },

    card_image: {
        width: '100%',
        height: 200,
        borderRadius: 15
    },
    
    image: {
        width: '95%',
        height: 250,
        margin: 10,
        borderRadius: 15
    }
})