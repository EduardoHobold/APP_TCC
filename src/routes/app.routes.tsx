import React from 'react';
import { Platform } from 'react-native';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'native-base';

import { StackNavigatorParamList, BottomTabParamList } from './types';

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createStackNavigator<StackNavigatorParamList>();

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Results } from '../pages/Results';
import { Activities } from '../pages/Activities';

function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Inicio'>
            <Stack.Screen name="Inicio" component={Home} />
            <Stack.Screen name="Atividades" component={Activities} />
        </Stack.Navigator>
    );
}

export function AppRoutes() {
    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.primary.default,
                tabBarInactiveTintColor: theme.colors.secondary.default,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 70,
                    paddingHorizontal: 5,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0
                }
            }}
        >
            <Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <AntDesign
                            name="home"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Screen
                name="Resultados"
                component={Results}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <FontAwesome5
                            name="clipboard-list"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Screen
                name="Perfil"
                component={Profile}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <Feather
                            name="user"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Navigator>
    )
}