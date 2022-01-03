import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MarmaladeStack } from './MarmaladeStack';
import { Basket } from '../components/basket/Basket';

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name='MainMarmalade' component={MarmaladeStack} options={{title: 'Список товаров'}} />
                <Tab.Screen name='Basket' component={Basket} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}