import React, { useContext, useState } from "react";
import { Alert, ActivityIndicator, Platform } from 'react-native';
import { Container, Text, Box, Button, Center } from "native-base";

import { useAuth } from '../../hooks/auth'

import GeometricIconButton from '../../assets/geometric-icon-button.svg'

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
                w='100%' h='100%' justifyContent='space-between'
            >
                <Box alignItems={'center'} justifyContent={'center'} mt={50}>
                    <GeometricIconButton width={200} height={200} fill="#fff" />
                </Box>
                <Text fontFamily="bold" textAlign='center' fontSize='36' color='text'>Teste primary color</Text>
                <Box p='10'>
                    <Button shadow={2} onPress={handleSignInWithGoogle}>
                        <Text fontFamily="medium" textAlign='center' fontSize='20' color='white'>Login</Text>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}