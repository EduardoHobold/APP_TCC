import React from 'react';
import { Container, Text, Box, Button, Center } from "native-base";

import { useAuth } from '../../hooks/auth';

import { geometricShapes } from '../../utils/geometricShapes';
import ArrowSvg from '../../assets/arrow.svg';

export function Home() {
    const { user, signOut } = useAuth();
    const Test = geometricShapes[0].icon;
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
                <ArrowSvg width={100} height={100} fill="#fff" />
                {/* <Test width={100} height={100} fill="#fff" /> */}
            </Box>
        </Center>
    )
}