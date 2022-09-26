import React from 'react';
import { Container, Text, Box, Button, Center } from "native-base";

export function SignIn() {
    return (
        <Center>
            <Box bg='blue.400' width='100%' height='100%'>
                <Box>
                    <Text textAlign='center' fontWeight='bold' fontSize='xl'>Testando Text</Text>
                </Box>
                <Box p='10'>
                    <Button shadow={2} onPress={() => console.log("hello world")}>
                        Click me
                    </Button>
                </Box>
            </Box>
        </Center>
    )
}