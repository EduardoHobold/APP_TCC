import React, { useState, useEffect } from 'react';
import { Container, Text, Box, Button, Center, Progress, IconButton } from "native-base";
import { FlatList, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Speech from 'expo-speech';

import { SvgProps } from 'react-native-svg';
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import { geometricShapes } from '../../utils/geometricShapes';

interface IGeometricShape {
    id: string;
    name: string;
    svg: React.FC<SvgProps>;
    color: string;
}

export function Activities() {
    const navigation = useNavigation();
    const route = useRoute();
    // const { nivel } = route.params;
    const nivel = route.params.nivel;
    const [question, setQuestion] = useState<IGeometricShape>();

    // Controle de listas
    const [list, setList] = useState<IGeometricShape[]>([]);
    let listTemp: IGeometricShape[] = [];

    const [countSeconds, setCountSeconds] = useState(0);
    const [customInterval, setCustomInterval] = useState();

    useEffect(() => {
        navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } })
        generateList();
    }, []);

    async function generateList() {
        for (let i = 0; i < 6; i++) {
            let number: any = generateSingleValue('list');
            let value: any = geometricShapes.find(e => e.id === number);
            if (i > 0) {
                listTemp.push(validateValue(number));
            } else {
                listTemp.push(value);
            }
        }
        setQuestion(generateQuestion());
        setList(listTemp);
    }

    function generateQuestion() {
        let number: any = generateSingleValue();
        return listTemp.find(e => e === listTemp[number]);
    }

    function generateSingleValue(type?: string): any {
        if (type == 'list') {
            return String(Math.floor(Math.random() * geometricShapes.length + 1));
        } else {
            return Math.floor(Math.random() * listTemp.length - 1) + 1;
        }
    }

    function validateValue(value: string): any {
        let have = false;
        for (let i = 0; i <= listTemp.length - 1; i++) {
            if (listTemp[i].id === value) {
                have = true;
            }
        }

        if (have) {
            return validateValue(generateSingleValue('list'));
        } else {
            return geometricShapes.find(e => e.id === value);
        }
    }

    function validateAnswer(item: IGeometricShape) {
        console.log(item);
        console.log(item.id === question.id ? 'Sucesso': 'Errado');
        generateList();
    }

    // Funções para controle do contador de tempo
    // const startTimer = () => {
    //     setCustomInterval(
    //         setInterval(() => {
    // 			setCountSeconds((value) => value + 1)
    // 		}, 1000)
    //     )
    // }

    const stopTimer = () => {
        if (customInterval) {
            clearInterval(customInterval);
        }
    }

    function speak(text: string) {
        Speech.speak(text);
    }

    const Item = ({ Item }: { Item: IGeometricShape }) => {
        return (
            <Button p={2} m={1} borderWidth={1} borderRadius={5} borderColor={'primary.dark'} onPress={() => validateAnswer(Item)}>
                <Item.svg width={100} height={100} fill="#fff"></Item.svg>
            </Button>
        );
    };

    return (
        <Center>
            <Box bg={{
                linearGradient: {
                    colors: ['primary.default', 'secondary.default'],
                    start: [0.5, 0],
                    end: [0, 1]
                }
            }} width='100%' height='100%' >

                {/* Header Progress */}
                <Box flexDirection={'row'} justifyContent={'space-around'}>
                    <IconButton p={1}
                        variant="ghost"
                        onPress={() => {
                            navigation.goBack();
                            navigation.getParent()?.setOptions({ tabBarStyle: { display: 'flex', height: 70, paddingHorizontal: 5, paddingVertical: Platform.OS === 'ios' ? 20 : 0 } })
                        }}
                        _icon={{
                            as: Entypo,
                            name: "chevron-left",
                            color: 'text',
                            size: 8
                        }} />
                    <Progress w={'70%'} size="xl" bg={'#fff'} colorScheme={'primary'} mb={4} value={55} mt={4} />
                    <Box flexDirection={'row'} mt={3}>
                        <Text fontFamily={'bold'} color={'text'} fontSize={20} pr={2}>5</Text>
                        <MaterialCommunityIcons name="star" size={26} color="yellow" />
                    </Box>
                </Box>

                <Box justifyContent={'center'} height='80%'>
                    <Box>
                        <Text
                            fontSize={24}
                            textAlign={'center'}
                            fontFamily={'bold'}
                            color={'lightText'}
                        >
                            Encontre a forma geométrica correta
                        </Text>
                    </Box>

                    {question &&
                        <Box>
                            <Box p={2} m={1} alignItems={'center'}>
                                <Box p={2} m={1} borderWidth={1} borderRadius={5} borderColor={'primary.dark'} alignItems={'center'}>
                                    {nivel !== 3
                                        ?
                                        <question.svg width={150} height={150} fill="#fff"></question.svg>
                                        :
                                        <Text
                                            fontSize={36}
                                            textAlign={'center'}
                                            fontFamily={'medium'}
                                            color={'lightText'}
                                            textTransform={'uppercase'}
                                            p={3}
                                        >{question.name}
                                        </Text>
                                    }
                                </Box>
                            </Box>

                            <Box width={'100%'} flexDirection={'row'} justifyContent={'flex-end'}>
                                <IconButton mr={5} variant="solid" borderRadius={30} onPress={() => speak(question.name)} _icon={{
                                    as: AntDesign,
                                    name: "sound",
                                    color: '#fff',
                                    size: 8
                                }} />
                            </Box>
                        </Box>
                    }

                    <Box alignItems={'center'} mt={5} >
                        {list.length > 0 &&
                            <FlatList
                                data={list}
                                renderItem={({ item }) => <Item Item={item} />}
                                keyExtractor={(item) => item.id}
                                numColumns={3}
                                refreshing={true}
                            />
                        }
                    </Box>
                </Box>

            </Box>
        </Center>
    )

}