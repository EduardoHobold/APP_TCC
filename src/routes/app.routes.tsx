import React from 'react';
import { Platform } from 'react-native';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'native-base';
const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Results } from '../pages/Results';

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
                name="Inicio"
                component={Home}
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