import React from 'react';
import { Container, Text, Box, Button, Center, Avatar, IconButton } from "native-base";

import { useAuth } from '../../hooks/auth';
import { Feather } from '@expo/vector-icons';

export function Results() {
    const { user, signOut } = useAuth();
    return (
        <Center>
            <Box bg='backgroud' width='100%' height='100%'>

                {/* Header */}
                <Box bg='primary.default' justifyContent={'center'} alignItems={'center'} p={3} h={'80px'} >
                    <Text fontFamily="bold" color={'lightText'} justifyContent={'center'} textAlign='center' fontSize='24'>Lista de Resultados</Text>
                </Box>

                {/* Body */}
                <Box w={'90%'} h={'100px'} bg={'backgroud2'} mx={5} mt={5} borderRadius={5}>
                    <Box>
                        
                    </Box>
                </Box>
            </Box>
        </Center>
    )
}