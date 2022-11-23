import React, { useEffect } from 'react';
import { StatusBar, Alert } from 'react-native';
import { Text, Box, Center } from "native-base";

import { useAuth } from '../../hooks/auth';
import { getRealm } from '../../databases/realm';

import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';


export function Results() {
    const { user, signOut } = useAuth();

    async function searchActivities() {
        const realm = await getRealm();

        try {
            const response = realm.objects("Activities");
            console.log('dados', response);
        } catch {
            Alert.alert("Não foi possível buscar os dados!")
        } finally {
            realm.close();
        }
    }

    useEffect(() => {
        searchActivities();
    }, [])

    return (
        <Center>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <Box bg='backgroud' width='100%' height='100%'>

                {/* Header */}
                <Box bg='primary.default' justifyContent={'center'} alignItems={'center'} p={3} pt={10} h={'110px'} >
                    <Text fontFamily="bold" color={'lightText'} justifyContent={'center'} textAlign='center' fontSize='24'>Lista de Resultados</Text>
                </Box>

                {/* Body */}
                <Box w={'90%'} h={'auto'} mx={5} mt={5} flexDirection={'row'}>
                    <Box w={'5%'} h={'100%'} bg={'green.700'} borderTopLeftRadius={5} borderBottomLeftRadius={5}></Box>
                    <Box w={'95%'} h={'100%'} bg={'backgroud2'} borderTopRightRadius={5} borderBottomRightRadius={5} p={3}>
                        <Box justifyContent={'space-between'} flexDirection='row' paddingY={2} paddingX={3}>
                            <Box flexDirection={'row'} alignItems="center">
                                <Entypo name='calendar' size={22} />
                                <Text fontFamily="bold" color={'title'} fontSize='18' > 21/11/2022</Text>
                            </Box>
                            <Box flexDirection={'row'} alignItems="center">
                                <MaterialIcons name='timer' size={24} />
                                <Text fontFamily="bold" color={'title'} fontSize='18'> 15.4s</Text>
                            </Box>
                        </Box>

                        <Box justifyContent={'space-between'} flexDirection='row' paddingY={1} paddingX={3}>
                            <Box flexDirection={'row'} alignItems="center">
                                <AntDesign name='checkcircle' color='green' size={18} />
                                <Text fontFamily="bold" color={'title'} fontSize='18' > Acertos: </Text>
                                <Text fontFamily="bold" color={'title'} fontSize='18' >6 </Text>
                            </Box>
                            <Box flexDirection={'row'} alignItems="center">
                                <AntDesign name='closecircle' color='red' size={18} />
                                <Text fontFamily="bold" color={'title'} fontSize='18' > Erros: </Text>
                                <Text fontFamily="bold" color={'title'} fontSize='18' >4 </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Center>
    )
}