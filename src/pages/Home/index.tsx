import React from 'react';
import { Button, Text, Box, IconButton, Center, Avatar } from "native-base";
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import { HomeNavigationProp } from '../../routes/types';

import { Feather } from '@expo/vector-icons';

import GeometricIconButton from '../../assets/geometric-icon-button.svg';

export function Home() {
    const { user, signOut } = useAuth();
    const navigation = useNavigation<HomeNavigationProp>();

    return (
        <Center>
            <Box bg='backgroud' width='100%' height='100%'>

                {/* Header */}
                <Box bg='primary.default' flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} p={3} >
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

                <Box alignItems={'center'} mt={3}>
                    <Button backgroundColor={'white'} shadow={5} w={'80%'} h={200} mt={3} p={0} onPress={() => navigation.navigate('Atividades', { nivel: 1})}>
                        <Box flexDirection={'row'} w={'100%'} h={'100%'} >
                            <Box h={'100%'} w={'40%'} alignItems={'center'} justifyContent={'center'} bg={'green.700'}>
                                <GeometricIconButton width={100} height={100} fill="#fff" />
                                <Text textAlign={'center'} fontFamily={'bold'} color={'#fff'} fontSize={20}>Fácil</Text>
                            </Box>
                            <Box h={'100%'} w={'60%'} alignItems={'center'} justifyContent={'center'}>
                                <Text textAlign={'center'} fontFamily={'bold'} color={'green.700'} fontSize={20}>Formas Geométricas</Text>
                            </Box>
                        </Box>
                    </Button>
                    <Button backgroundColor={'white'} shadow={5} w={'80%'} h={200} mt={3} p={0} onPress={() => navigation.navigate('Atividades', { nivel: 2})}>
                        <Box flexDirection={'row'} w={'100%'} h={'100%'} >
                            <Box h={'100%'} w={'40%'} alignItems={'center'} justifyContent={'center'} bg={'amber.400'}>
                                <GeometricIconButton width={100} height={100} fill="#fff" />
                                <Text textAlign={'center'} fontFamily={'bold'} color={'#fff'} fontSize={20}>Médio</Text>
                            </Box>
                            <Box h={'100%'} w={'60%'} alignItems={'center'} justifyContent={'center'}>
                                <Text textAlign={'center'} fontFamily={'bold'} color={'amber.400'} fontSize={20}>Formas Geométricas Coloridas</Text>
                            </Box>
                        </Box>
                    </Button>
                    <Button backgroundColor={'white'} shadow={5} w={'80%'} h={200} mt={3} p={0} onPress={() => navigation.navigate('Atividades', { nivel: 3})}>
                        <Box flexDirection={'row'} w={'100%'} h={'100%'} >
                            <Box h={'100%'} w={'40%'} alignItems={'center'} justifyContent={'center'} bg={'red.700'}>
                                <GeometricIconButton width={100} height={100} fill="#fff" />
                                <Text textAlign={'center'} fontFamily={'bold'} color={'#fff'} fontSize={20}>Díficil</Text>
                            </Box>
                            <Box h={'100%'} w={'60%'} alignItems={'center'} justifyContent={'center'}>
                                <Text textAlign={'center'} fontFamily={'bold'} color={'red.700'} fontSize={20}>Formas Geométricas e Palavras</Text>
                            </Box>
                        </Box>
                    </Button>
                </Box>

            </Box>
        </Center>
    )
}