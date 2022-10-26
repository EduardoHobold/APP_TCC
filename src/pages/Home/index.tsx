import React from 'react';
import { Button, Text, Box, IconButton, Center, Avatar } from "native-base";
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import { HomeNavigationProp } from '../../routes/types';

import { Feather } from '@expo/vector-icons';

export function Home() {
    const { user, signOut } = useAuth();
    const navigation = useNavigation<HomeNavigationProp>();

    return (
        <Center>
            <Box bg='backgroud' width='100%' height='100%'>

                {/* Header */}
                <Box bg='primary.default' flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} p={3} >
                    <Box flexDirection={'row'} alignItems={'center'}>
                        <Avatar alignSelf={'center'} size="lg"
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

                <Box alignItems={'center'}>
                    <Button backgroundColor={'red.600'} w={200} h={200} mt={3} onPress={() => navigation.navigate('Atividades')}></Button>
                    <Button backgroundColor={'blue.600'} w={200} h={200} mt={3} onPress={() => navigation.navigate('Atividades')}></Button>
                    <Button backgroundColor={'green.600'} w={200} h={200} mt={3} onPress={() => navigation.navigate('Atividades')}></Button>
                </Box>
                
            </Box>
        </Center>
    )
}