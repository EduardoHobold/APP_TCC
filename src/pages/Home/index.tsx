import React, { FC } from 'react';
import { Container, Text, Box, IconButton, Center, Avatar } from "native-base";
import { FlatList } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { geometricShapes } from '../../utils/geometricShapes';
import { SvgProps } from 'react-native-svg';
import { Feather } from '@expo/vector-icons';

export function Home() {
    const { user, signOut } = useAuth();

    interface IGeometricShape {
        id: string;
        name: string;
        svg: React.FC<SvgProps>;
        color: string;
    }

    const Item = ({ Item }: { Item: IGeometricShape }) => {
        return (
            <Box p={2} m={1} borderWidth={1} borderRadius={5} borderColor={'#000'}>
                <Item.svg width={100} height={100} fill="grey"></Item.svg>
            </Box>
        );
    };

    return (
        <Center>
            <Box bg='backgroud'  width='100%' height='100%'>

                {/* Header */}
                <Box bg='primary.default' flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} p={5} >
                    <Box flexDirection={'row'} alignItems={'center'}>
                        <Avatar alignSelf={'center'} size="lg"
                            source={{ uri: user.photo }}
                        />
                        <Box flexDirection={'row'} ml={17}>
                            <Text fontFamily="regular" color={'lightText'} justifyContent={'center'} textAlign='center' fontSize='20'>Olá, {user.name}</Text>
                        </Box>
                    </Box>

                    <IconButton variant="ghost" onPress={signOut} _icon={{
                        as: Feather,
                        name: "log-out",
                        color: '#fff',
                        size: 8
                    }} />
                </Box>


                <Box alignItems={'center'} >
                    <FlatList
                        data={geometricShapes}
                        renderItem={({ item }) => <Item Item={item} />}
                        keyExtractor={(item) => item.id}
                        numColumns={3}
                        refreshing={true}
                    />
                </Box>
            </Box>
        </Center>
    )
}