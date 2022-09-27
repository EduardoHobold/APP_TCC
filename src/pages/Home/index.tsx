import React from 'react';
import { Container, Text, Box, Button, Center } from "native-base";

export function Home() {
    return (
        <Center>
            <Box bg='blue.400' width='100%' height='100%'>
                <Box>
                    <Text textAlign='center' fontWeight='bold' fontSize='xl'>Tela HOME</Text>
                </Box>
            </Box>
        </Center>
    )
}