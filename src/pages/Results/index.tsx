import React, { useEffect } from 'react';
import { StatusBar, Alert } from 'react-native';
import { Text, Box, Center } from "native-base";

import { CardResults } from '../../components/CardResults';

import { useAuth } from '../../hooks/auth';
import { getRealm } from '../../databases/realm';

export function Results() {
    const { user, signOut } = useAuth();

    async function searchActivities() {
        // const realm = await getRealm();

        // try {
        //     const response = realm.objects("Activities");
        //     console.log('dados', response);
        // } catch {
        //     Alert.alert("Não foi possível buscar os dados!")
        // } finally {
        //     realm.close();
        // }
    }

    useEffect(() => {
        searchActivities();
    }, [])

    return (
        <Center>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <Box bg='backgroud' width='100%' height='100%'>

                {/* Header */}
                <Box bg='primary.default' justifyContent={'center'} alignItems={'center'} p={3} pt={10} h={`${70 + StatusBar.currentHeight!}px`} >
                    <Text fontFamily="bold" color={'lightText'} justifyContent={'center'} textAlign='center' fontSize='24'>Lista de Resultados</Text>
                </Box>

                {/* Body */}
                <Box>
                    <CardResults
                        nivel={1}
                        date='22/11/2022'
                        time={15.4}
                        correct={7}
                        wrong={3}
                    />
                    <CardResults
                        nivel={2}
                        date='24/11/2022'
                        time={8.7}
                        correct={4}
                        wrong={6}
                    />
                </Box>
            </Box>
        </Center>
    )
}