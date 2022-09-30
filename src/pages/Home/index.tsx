import React from 'react';
import { Container, Text, Box, Button, Center } from "native-base";

import { useAuth } from '../../hooks/auth';


export function Home() {
    const { user, signOut } = useAuth();
    return (
        <Center>
            <Box bg='primary.400' width='100%' height='100%'>
                <Box>
                    <Text fontFamily="regular" textAlign='center' fontSize='50'>Tela HOME</Text>
                </Box>
                <Box p='10'>
                    <Button shadow={2} onPress={signOut}>
                        <Text fontFamily="medium" textAlign='center' fontSize='20' color='white'>Deslogar</Text>
                    </Button>
                </Box>
            </Box>
        </Center>
    )
}