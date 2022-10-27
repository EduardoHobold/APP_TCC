import React, { useState, useEffect } from 'react';
import { Container, Text, Box, Button, Center } from "native-base";
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { HomeNavigationProp } from '../../routes/types';
import { SvgProps } from 'react-native-svg';

import { geometricShapes } from '../../utils/geometricShapes';

interface IGeometricShape {
    id: string;
    name: string;
    svg: React.FC<SvgProps>;
    color: string;
}

export function Activities() {
    const navigation = useNavigation<HomeNavigationProp>();
    const [question, setQuestion] = useState<IGeometricShape>();

    // Controle de listas
    const [list, setList] = useState<IGeometricShape[]>([]);
    let listTemp: IGeometricShape[] = [];

    // const [countSeconds, setCountSeconds] = useState(0);
    // const [customInterval, setCustomInterval] = useState();

    useEffect(() => {
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

    // Funções para controle do contador de tempo
    // const startTimer = () => {
    //     setCustomInterval(
    //         setInterval(() => {
    // 			setCountSeconds((value) => value + 1)
    // 		}, 1000)
    //     )
    // }

    // const stopTimer = () => {
    //     if (customInterval) {
    //         clearInterval(customInterval);
    //     }
    // }

    const Item = ({ Item }: { Item: IGeometricShape }) => {
        return (
            <Box p={2} m={1} borderWidth={1} borderRadius={5} borderColor={'#000'}>
                <Item.svg width={100} height={100} fill="#000"></Item.svg>
            </Box>
        );
    };

    return (
        <Center>
            <Box bg={'backgroud'} width='100%' height='100%'>
                {/* Header */}
                <Box bg='primary.default' textAlign={'center'} p={3} >
                    <Text fontFamily="regular" color={'lightText'} alignContent={'center'} textAlign='center' fontSize='20'>Atividades</Text>
                </Box>

                <Box p={2} m={1} alignItems={'center'}>
                    {question &&
                        <Box p={2} m={1} borderWidth={1} borderRadius={5} borderColor={'#000'} alignItems={'center'}>
                            <question.svg width={150} height={150} fill="#000"></question.svg>
                        </Box>
                    }
                </Box>

                <Box alignItems={'center'} >
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

                <Box alignItems="center">
                    <Button onPress={() => navigation.goBack()}>Voltar</Button>
                </Box>
            </Box>
        </Center>
    )

}