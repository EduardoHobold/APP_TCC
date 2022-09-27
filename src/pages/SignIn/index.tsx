import React, { useContext, useState } from "react";
import { Alert, ActivityIndicator, Platform } from 'react-native';
import { Container, Text, Box, Button, Center } from "native-base";

import { useAuth } from '../../hooks/auth'

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
        <Center>
            <Box bg='primary.200' width='100%' height='100%'>
                <Box>
                    <Text textAlign='center' fontWeight='bold' fontSize='xl'>Testando Text</Text>
                </Box>
                <Box p='10'>
                    <Button shadow={2} onPress={handleSignInWithGoogle}>
                        Click me
                    </Button>
                </Box>
            </Box>
        </Center>
    )
}