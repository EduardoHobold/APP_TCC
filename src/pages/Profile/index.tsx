import React from 'react';
import { Container, Text, Box, Button, Center } from "native-base";

import { useAuth } from '../../hooks/auth';


export function Profile() {
    // const { user, signOut } = useAuth();
    return (
        <Center>
            <Box bg='backgroud' width='100%' height='100%'>
                <Box>
                    <Text fontFamily="regular" textAlign='center' fontSize='50'>Tela de Perfil</Text>
                </Box>
            </Box>
        </Center>
    )
}