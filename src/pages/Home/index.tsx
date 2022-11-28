import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { Box, Text, IconButton, Center, Avatar, ScrollView, AlertDialog, Button } from "native-base";
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';
import { HomeNavigationProp } from '../../routes/types';

import { Feather, AntDesign } from '@expo/vector-icons';

import { CardActivities } from '../../components/CardActivities';

export function Home() {
    const { user, signOut } = useAuth();
    const navigation = useNavigation<HomeNavigationProp>();

    const [nivel, setNivel] = useState<number>(0);
    const [isOpen, setIsOpen] = useState(false);
    const cancelRef = React.useRef(null);
    const onClose = () => setIsOpen(false);

    function handleNavigationActivities() {
        navigation.navigate('Atividades', { nivel: nivel, user: user.id });
        onClose();
    }

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
                            onPress={() => { setIsOpen(!isOpen), setNivel(1) }}
                            dificultyText='Fácil'
                            description='Formas Geométricas'
                        />
                        <CardActivities
                            color='amber.400'
                            onPress={() => { setIsOpen(!isOpen), setNivel(2) }}
                            dificultyText='Médio'
                            description='Formas Geométricas Coloridas'
                        />
                        <CardActivities
                            color='red.700'
                            onPress={() => { setIsOpen(!isOpen), setNivel(3) }}
                            dificultyText='Díficil'
                            description='Formas Geométricas e Palavras'
                        />
                    </Box>
                </ScrollView>

            </Box>

            <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose} >
                <AlertDialog.Content>
                    <AlertDialog.Header bg={'primary.default'} flexDirection={'row'} justifyContent={'space-between'}>
                        <Text fontFamily="bold" color={'text'} fontSize={16}>Deseja iniciar a Atividade?</Text>
                        <IconButton variant="ghost" onPress={onClose} padding={0} _icon={{
                            as: AntDesign,
                            name: "close",
                            color: '#fff',
                            size: 5
                        }} />
                    </AlertDialog.Header>
                    <AlertDialog.Footer bg={'background'}>
                        <Button.Group space={2}>
                            <Button variant="unstyled" onPress={onClose} ref={cancelRef}>
                                <Text fontFamily="bold" color={'text_dark'} justifyContent={'center'} textAlign='center'>Cancelar</Text>
                            </Button>
                            <Button onPress={handleNavigationActivities} ref={cancelRef} bg={'secondary.default'}>
                                <Text fontFamily="bold" color={'text'} justifyContent={'center'} textAlign='center'>Iniciar</Text>
                            </Button>
                        </Button.Group>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
        </Center>
    )
}