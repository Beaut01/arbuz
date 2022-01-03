import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Marmalade } from '../components/marmalade/MarmaladePage';
import { MainPage } from '../components/mainPage/MainPage';

const Stack = createNativeStackNavigator();

export const MarmaladeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='MarmaladeList' component={MainPage} />
            <Stack.Screen name='Marmalade' component={Marmalade} />
        </Stack.Navigator>
    )
}