import React from 'react';
import { Container, Text, Box, Button, Center } from "native-base";

import { useAuth } from '../../hooks/auth';


export function Results() {
    // const { user, signOut } = useAuth();
    return (
        <Center>
            <Box bg='primary.400' width='100%' height='100%'>
                <Box>
                    <Text fontFamily="regular" textAlign='center' fontSize='50'>Tela de Resultados</Text>
                </Box>
            </Box>
        </Center>
    )
}