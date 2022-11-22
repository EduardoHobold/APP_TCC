import React from 'react';
import { Text, Box, Center } from "native-base";

import { useAuth } from '../../hooks/auth';
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import { green700 } from 'react-native-paper/lib/typescript/styles/colors';

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
                <Box w={'90%'} h={'auto'} mx={5} mt={5} flexDirection={'row'}>
                    <Box w={'5%'} h={'100%'} bg={'green.700'} borderTopLeftRadius={5} borderBottomLeftRadius={5}></Box>
                    <Box w={'95%'} h={'100%'} bg={'backgroud2'} borderTopRightRadius={5} borderBottomRightRadius={5} p={3}>
                        <Box justifyContent={'space-between'} flexDirection='row' paddingY={2}>
                            <Box flexDirection={'row'} alignItems="center">
                                <Entypo name='calendar' size={24} />
                                <Text fontFamily="bold" color={'title'} fontSize='18' > 21/11/2022</Text>
                            </Box>
                            <Box flexDirection={'row'} alignItems="center">
                                <Ionicons name='time' size={24} />
                                <Text fontFamily="bold" color={'title'} fontSize='18'> 15.4 </Text>
                            </Box>
                        </Box>

                        <Box justifyContent={'space-between'} flexDirection='row' paddingY={1}>
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