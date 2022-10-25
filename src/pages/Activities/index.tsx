import React from 'react';
import { Container, Text, Box, Button, Center } from "native-base";
import { useNavigation } from '@react-navigation/native';

import { HomeNavigationProp } from '../../routes/types';

export function Activities() {
    const navigation = useNavigation<HomeNavigationProp>();
    return (
        <Center>
            <Box bg='primary.400' width='100%' height='100%'>
                <Box>
                    <Text fontFamily="regular" textAlign='center' fontSize='50'>Atividades</Text>
                </Box>
                <Box alignItems="center">
                    <Button onPress={() => navigation.goBack()}>Voltar</Button>
                </Box>
            </Box>
        </Center>
    )
}