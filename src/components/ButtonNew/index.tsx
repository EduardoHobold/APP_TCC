import React from 'react';
import { Box, IconButton, IIconButtonProps } from "native-base";
import { Ionicons } from '@expo/vector-icons';

interface Props extends IIconButtonProps {
    onPress: () => void;
}

export function ButtonNew({ onPress, size, color, ...rest }: Props) {
    return (
        <Box w={90} h={90} background={color} justifyContent={'center'} alignItems={'center'} mb={20} borderRadius={50}>
            <Ionicons name='add' color={'#fff'} size={35} />
        </Box>
    );
}