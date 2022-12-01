import React from 'react';
import { Button, Box, Text } from 'native-base';

import GeometricIconButton from '../../assets/geometric-icon-button.svg';

interface Props {
    color: string;
    onPress: () => void;
    dificultyText: string;
    description: string;
}

export function CardActivities({ color, onPress, dificultyText, description }: Props) {
    return (
        <Button colorScheme={'backgroud2:alpha.10'} bg={'backgroud2'} shadow={5} w={'80%'} h={200} marginY={2} p={0} onPress={onPress}>
            <Box flexDirection={'row'} w={'100%'} h={'100%'} >
                <Box h={'100%'} w={'40%'} alignItems={'center'} justifyContent={'center'} bg={color} >
                    <GeometricIconButton width={100} height={100} fill="#fff" />
                    <Text textAlign={'center'} fontFamily={'bold'} color={'#fff'} fontSize={20}>{dificultyText}</Text>
                </Box>
                <Box h={'100%'} w={'60%'} alignItems={'center'} justifyContent={'center'}>
                    <Text textAlign={'center'} fontFamily={'bold'} color={color} fontSize={20}>{description}</Text>
                </Box>
            </Box>
        </Button>
    );
}