import React, { useContext, useState } from "react";
import { Alert, ActivityIndicator, Platform } from 'react-native';
import { Container, Text, Box, Button, Center } from "native-base";

import { useAuth } from '../../hooks/auth'

import Logo from '../../assets/logo.svg'
import Google from '../../assets/google.svg'
import Apple from '../../assets/apple.svg'

export function SignIn() {

    const [isLoading, setIsLoading] = useState(false);
    const { signInWithGoogle, signInWithApple } = useAuth();

    async function handleSignInWithGoogle() {
        try {
            setIsLoading(true);
            return await signInWithGoogle();
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível conectar a conta Google');
            setIsLoading(false);
        }

    }

    async function handleSignInWithApple() {
        try {
            setIsLoading(true);
            return await signInWithApple();
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível conectar a conta Apple');
            setIsLoading(false);
        }
    }

    return (
        <Box w='100%' h='100%'>
            <Box
                bg={{
                    linearGradient: {
                        colors: ['primary.default', 'secondary.default'],
                        start: [0.5, 0],
                        end: [0, 1]
                    }
                }}
                w='100%' h='100%' justifyContent='center'
            >
                <Box alignItems={'center'} justifyContent={'center'} mb={100}>
                    <Logo width={200} height={200} fill="#A8F4EA" />
                </Box>
                <Box>
                    <Text fontFamily="bold" textAlign='center' fontSize='28' color='text' mb={20}>
                        Realize atividades {'\n'} localizando as formas {'\n'} geométricas
                    </Text>
                    <Box paddingX={10}>
                        <Button shadow={3} onPress={handleSignInWithGoogle} bg={'white'} justifyContent={'flex-start'}>
                            <Box flexDirection={'row'} alignItems={'center'}>
                                <Box borderRightWidth={1} pr={2} >
                                    <Google width={30} height={30} />
                                </Box>
                                <Text fontFamily="regular" textAlign='center' fontSize='18' color='text_dark' pl={5}>Entrar com Google</Text>
                            </Box>
                        </Button>
                    </Box>
                    {Platform.OS === 'ios' &&
                        <Box paddingX={10} pt={3}>
                            <Button shadow={3} onPress={handleSignInWithApple} bg={'white'} justifyContent={'flex-start'}>
                                <Box flexDirection={'row'} alignItems={'center'}>
                                    <Box borderRightWidth={1} pr={2} >
                                        <Apple width={30} height={30} fill={'#fff'} />
                                    </Box>
                                    <Text fontFamily="regular" textAlign='center' fontSize='18' color='text_dark' pl={5}>Entrar com Apple</Text>
                                </Box>
                            </Button>
                        </Box>
                    }
                </Box>
            </Box>
        </Box>
    )
}