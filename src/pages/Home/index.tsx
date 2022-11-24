import React from 'react';
import { StatusBar } from 'react-native';
import { Box, Text, IconButton, Center, Avatar, ScrollView } from "native-base";
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';
import { HomeNavigationProp } from '../../routes/types';

import { Feather } from '@expo/vector-icons';

import { CardActivities } from '../../components/CardActivities';

export function Home() {
    const { user, signOut } = useAuth();
    const navigation = useNavigation<HomeNavigationProp>();

    return (
        <Center>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <Box bg='backgroud' width='100%' height='100%'>

                {/* Header */}
                <Box bg='primary.default' flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} p={3}
                    pt={StatusBar.currentHeight} h={`${70 + StatusBar.currentHeight!}px`} >
                    <Box flexDirection={'row'} alignItems={'center'}>
                        <Avatar alignSelf={'center'} size="md"
                            source={{ uri: user.photo }}
                        />
                        <Box flexDirection={'row'} ml={17}>
                            <Text fontFamily="regular" color={'lightText'} justifyContent={'center'} textAlign='center' fontSize='20'>Olá, {user.name}</Text>
                        </Box>
                    </Box>

                    <IconButton variant="ghost" onPress={signOut} _icon={{
                        as: Feather,
                        name: "log-out",
                        color: '#fff',
                        size: 8
                    }} />
                </Box>

                <ScrollView showsVerticalScrollIndicator={false} >
                    <Box alignItems={'center'} marginY={3}>
                        <CardActivities
                            color='green.700'
                            onPress={() => navigation.navigate('Atividades', { nivel: 1, user: user.id })}
                            dificultyText='Fácil'
                            description='Formas Geométricas'
                        />
                        <CardActivities
                            color='amber.400'
                            onPress={() => navigation.navigate('Atividades', { nivel: 2, user: user.id })}
                            dificultyText='Médio'
                            description='Formas Geométricas Coloridas'
                        />
                        <CardActivities
                            color='red.700'
                            onPress={() => navigation.navigate('Atividades', { nivel: 3, user: user.id })}
                            dificultyText='Díficil'
                            description='Formas Geométricas e Palavras'
                        />
                    </Box>
                </ScrollView>

            </Box>
        </Center>
    )
}