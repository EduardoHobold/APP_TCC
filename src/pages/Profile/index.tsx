import React from 'react';
import { StatusBar } from 'react-native';
import { Text, Box, Center, Avatar, Input, Icon, Stack } from "native-base";

import { useAuth } from '../../hooks/auth';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export function Profile() {
    const { user } = useAuth();
    return (
        <Center>
            <Box bg='backgroud' width='100%' height='100%'>
                {/* Header */}
                {/* <Box bg='primary.default' justifyContent={'center'} alignItems={'center'} p={3} pt={10} h={160} >
                </Box>
                <Avatar alignSelf={'center'} size="120px" mt={-60}
                    source={{ uri: user.photo }}
                /> */}

                <Box bg='primary.default' justifyContent={'center'} alignItems={'center'} pt={10} pb={5} h={160} borderBottomLeftRadius={40} borderBottomRightRadius={40} >
                    <Avatar alignSelf={'center'} size="100px"
                        source={{ uri: user.photo }}
                    />
                </Box>

                <Box paddingX={3} w="100%" mt={5}>
                    {/* <Input InputLeftElement={<Icon as={<FontAwesome name="user" />} size="lg" mx="3" placeholder="Nome" w="90%" colorScheme={'red'} /> */}
                    <Stack space={2} w="100%" alignItems="center" paddingY={2}>
                        <Input w={{
                            base: "90%",
                            md: "25%"
                        }}
                            value={user.name}
                            InputLeftElement={<Icon as={<FontAwesome name="user" />} size={5} ml="2" color="secondary.default" />}
                            placeholder="Name"
                            placeholderTextColor={"secondary.default"}
                            color={"secondary.default"}
                            fontSize={16}
                            // borderColor={"secondary.default"}
                            backgroundColor={"backgroud2"}
                            isReadOnly />
                    </Stack>

                    <Stack space={2} w="100%" alignItems="center" paddingY={2}>
                        <Input w={{
                            base: "90%",
                            md: "25%"
                        }}
                            value={user.email}
                            InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="secondary.default" />}
                            placeholder="Name"
                            placeholderTextColor={"secondary.default"}
                            color={"secondary.default"}
                            fontSize={16}
                            // borderColor={"secondary.default"}
                            backgroundColor={"backgroud2"}
                            isReadOnly />
                    </Stack>
                </Box>
            </Box>
        </Center>
    )
}