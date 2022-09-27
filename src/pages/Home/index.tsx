import React from 'react';
import { Container, Text, Box, Button, Center } from "native-base";

export function Home() {
    return (
        <Center>
            <Box bg='primary.400' width='100%' height='100%'>
                <Box>
                    <Text fontFamily="regular" textAlign='center' fontSize='50'>Tela HOME</Text>
                </Box>
            </Box>
        </Center>
    )
}