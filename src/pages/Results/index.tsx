import React, { useState, useCallback } from 'react';
import { StatusBar, FlatList, Alert } from 'react-native';
import { Text, Box, Center } from "native-base";
import { useFocusEffect } from '@react-navigation/native';

import moment from 'moment';

import { CardResults } from '../../components/CardResults';

import { useAuth } from '../../hooks/auth';
import getRealm from '../../databases/realm';
import { LoadAnimation } from '../../components/LoadAnimation';

interface IResult {
    _id: string;
    idUser: string;
    time: number;
    correct: number;
    wrong: number;
    nivel: number;
    date: Date;
}

export function Results() {
    const { user, signOut } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [listResult, setListResult] = useState<IResult[]>([]);

    async function searchActivities() {
        setIsLoading(true);
        const realm = await getRealm();

        try {
            const response = realm.objects<IResult[]>("Activities").filtered(`idUser = '${user.id}'`).sorted("date", true).toJSON();
            setListResult(response)
            console.log('dados', listResult);
        } catch {
            Alert.alert("Não foi possível buscar os dados!")
        } finally {
            realm.close();
            setIsLoading(false);
        }
    }

    useFocusEffect(useCallback(() => {
        searchActivities();
    }, []));

    return (
        <Center>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <Box bg='backgroud' width='100%' height='100%'>

                {/* Header */}
                <Box bg='primary.default' justifyContent={'center'} alignItems={'center'} p={3} pt={10} h={`${70 + StatusBar.currentHeight!}px`} >
                    <Text fontFamily="bold" color={'lightText'} justifyContent={'center'} textAlign='center' fontSize='24'>Lista de Resultados</Text>
                </Box>

                {/* Body */}
                {
                    isLoading
                        ? <LoadAnimation />
                        : <FlatList
                            data={listResult}
                            keyExtractor={item => item._id}
                            renderItem={({ item }) => (
                                <CardResults
                                    nivel={item.nivel}
                                    date={String(moment(item.date).format('DD/MM/YYYY HH:mm'))}
                                    time={item.time}
                                    correct={item.correct}
                                    wrong={item.wrong}
                                />
                            )}
                            showsVerticalScrollIndicator={false}
                        />
                }


            </Box>
        </Center>
    )
}