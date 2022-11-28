import React from 'react';
import { Box, Text } from 'native-base';

import { AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
    nivel: number;
    date: string;
    time: number;
    correct: number;
    wrong: number;
}

export function CardResults({ nivel, date, time, correct, wrong }: Props) {
    let color = '';

    if (nivel === 1) {
        color = 'green.700'
    } else if (nivel === 2) {
        color = 'amber.400'
    } else {
        color = 'red.700'
    }

    return (
        <Box w={'90%'} h={'auto'} mx={5} mt={5} flexDirection={'row'}>
            <Box w={'5%'} h={'100%'} bg={color} borderTopLeftRadius={5} borderBottomLeftRadius={5}></Box>
            <Box w={'95%'} h={'100%'} bg={'backgroud2'} borderTopRightRadius={5} borderBottomRightRadius={5} p={3}>
                <Box justifyContent={'space-between'} flexDirection='row' paddingY={2} paddingX={3}>
                    <Box flexDirection={'row'} alignItems="center">
                        <MaterialCommunityIcons name='calendar-clock' size={24} />
                        <Text fontFamily="bold" color={'title'} fontSize='18' > {date}</Text>
                    </Box>
                    <Box flexDirection={'row'} alignItems="center">
                        <MaterialIcons name='timer' size={24} />
                        <Text fontFamily="bold" color={'title'} fontSize='18'> {time}s</Text>
                    </Box>
                </Box>

                <Box justifyContent={'space-between'} flexDirection='row' paddingY={1} paddingX={3}>
                    <Box flexDirection={'row'} alignItems="center">
                        <AntDesign name='checkcircle' color='green' size={18} />
                        <Text fontFamily="bold" color={'title'} fontSize='18' > Acertos: </Text>
                        <Text fontFamily="bold" color={'title'} fontSize='18' >{correct}</Text>
                    </Box>
                    <Box flexDirection={'row'} alignItems="center">
                        <AntDesign name='closecircle' color='red' size={18} />
                        <Text fontFamily="bold" color={'title'} fontSize='18' > Erros: </Text>
                        <Text fontFamily="bold" color={'title'} fontSize='18' >{wrong}</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}