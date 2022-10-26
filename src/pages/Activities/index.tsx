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
            let number = generateSingleValue()
            let value: any = geometricShapes.find(e => e.id === number);
            if (i > 0) {
                listTemp.push(validateValue(number));
            } else {
                listTemp.push(value);
            }
        }
        setList(listTemp);
    }

    function generateSingleValue() {
        return String(Math.floor(Math.random() * geometricShapes.length + 1));
    }

    function validateValue(value: string): any {
        let have = false;
        for (let i = 0; i <= listTemp.length - 1; i++) {
            if (listTemp[i].id === value) {
                have = true;
            }
        }

        if (have) {
            return validateValue(generateSingleValue());
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
            <Box width='100%' height='100%'>
                <Box>
                    <Text fontFamily="regular" textAlign='center' fontSize='50'>Atividades</Text>
                </Box>
                <Box alignItems="center">
                    <Button onPress={() => navigation.goBack()}>Voltar</Button>
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
            </Box>
        </Center>
    )

}