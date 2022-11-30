import React, { useState, useEffect } from 'react';
import { Container, Text, Box, Button, Center, Progress, IconButton, AlertDialog } from "native-base";
import { Alert, FlatList, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import * as Speech from 'expo-speech';
import uuid from 'react-native-uuid';

import getRealm from '../../databases/realm';

import { SvgProps } from 'react-native-svg';
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import { geometricShapes, colorList } from '../../utils/geometricShapes';

interface IGeometricShape {
    id: string;
    name: string;
    svg: React.FC<SvgProps>;
    color: string;
}

interface IResult {
    _id: string;
    idUser: string;
    time: number;
    correct: number;
    wrong: number;
    nivel: number;
    date: Date;
}

export function Activities() {
    const navigation = useNavigation();
    const route: any = useRoute();

    const { nivel, user } = route.params;
    const [question, setQuestion] = useState<IGeometricShape>();

    // Controle de listas
    const [list, setList] = useState<IGeometricShape[]>([]);
    let listTemp: IGeometricShape[] = [];

    const [countSeconds, setCountSeconds] = useState(0);
    const [customInterval, setCustomInterval] = useState<any>();

    const [progress, setProgress] = useState(0);
    const [obj, setObj] = useState<IResult>({ _id: uuid.v4(), idUser: user, correct: 0, wrong: 0, time: 0, nivel: nivel } as IResult);

    const [isOpen, setIsOpen] = useState(false);
    const cancelRef = React.useRef(null);
    const onClose = () => setIsOpen(false);

    useEffect(() => {
        navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } })
        nivel !== 2 ? generateList() : generateListColors();
        startTimer();
    }, []);

    function handleBack() {
        navigation.goBack();
        navigation.getParent()?.setOptions({ tabBarStyle: { display: 'flex', height: 70, paddingHorizontal: 5, paddingVertical: Platform.OS === 'ios' ? 20 : 0 } });
    }

    // Gera lista Nivel 1 e 3
    async function generateList() {
        for (let i = 0; i < 6; i++) {
            let number: any = generateSingleValue(geometricShapes, 'list');
            let value: any = geometricShapes.find(e => e.id === number);
            if (i > 0) {
                listTemp.push(validateValue(number));
            } else {
                listTemp.push(value);
            }
        }
        setQuestion(generateQuestion() as IGeometricShape);
        setList(listTemp);
    }

    // Gera lista Nivel 2
    function generateListColors() {
        let number: any = generateSingleValue(geometricShapes, 'list');
        for (let i = 0; i < 6; i++) {
            let value: any = { ...geometricShapes.find(e => e.id === number) };
            value.color = generateColor();

            if (i > 0) {
                listTemp.push(validateValueColors(value));
            } else {
                listTemp.push(value);
            }
        }
        setQuestion(generateQuestion() as IGeometricShape);
        setList(listTemp);
    }

    // Gera uma cor aleatória da lista de cores - colorList
    function generateColor() {
        let numberColor: any = generateSingleValue(colorList, 'list');
        let valueColor: any = colorList.find(e => e.id === numberColor);
        return valueColor.color;
    }

    // Gera a questão aleatória que irá aparecer a cima da tela
    function generateQuestion() {
        let number: any = generateSingleValue(geometricShapes);
        return listTemp.find(e => e === listTemp[number]);
    }

    // Gera um objeto da lista passada como parametro
    function generateSingleValue(list: any, type?: string): any {
        if (type == 'list') {
            return String(Math.floor(Math.random() * list.length + 1));
        } else {
            return Math.floor(Math.random() * listTemp.length - 1) + 1;
        }
    }

    // Valida registro das listas geradas nas atividade 1 e 3 para não duplicar os objetos
    function validateValue(value: string): any {
        let have = false;
        for (let i = 0; i <= listTemp.length - 1; i++) {
            if (listTemp[i].id === value) {
                have = true;
            }
        }

        if (have) {
            return validateValue(generateSingleValue(geometricShapes, 'list'));
        } else {
            return geometricShapes.find(e => e.id === value);
        }
    }

    // Valida registro das listas geradas na atividade 2 para não duplicar a cor
    function validateValueColors(value: IGeometricShape): any {
        let have = false;
        for (let i = 0; i <= listTemp.length - 1; i++) {
            if (listTemp[i].color === value.color) {
                have = true;
            }
        }

        if (have) {
            value.color = generateColor();
            return validateValueColors(value);
        } else {
            return value;
        }
    }

    async function saveNewAtivity() {
        const realm = await getRealm();
        console.log('save');
        if (realm) {
            console.log('entrou');
            try {
                console.log('entrou try');
                realm.write(() => {
                    realm.create('Activities', obj);
                });
    
            } catch {
                Alert.alert('Não foi possível concluir a atividade');
            } finally {
                realm.close();
                setIsOpen(!isOpen);
            }
        }
    }

    // Valida Respostas quando o usuario clicar
    function validateAnswer(item: IGeometricShape) {
        //Valida se acertou ou errou e vai armazenando os dados
        obj.correct = nivel !== 2 ? (question?.id === item.id ? obj.correct + 1 : obj.correct) : (question?.color === item.color ? obj.correct + 1 : obj.correct);
        obj.wrong = nivel !== 2 ? (question?.id !== item.id ? obj.wrong + 1 : obj.wrong) : (question?.color !== item.color ? obj.wrong + 1 : obj.wrong);

        stopTimer();
        obj.time = obj.time + countSeconds;

        setProgress(progress + 10);

        if ((obj.correct + obj.wrong) < 10) {
            nivel !== 2 ? generateList() : generateListColors();
            startTimer();
        } else {
            obj.time = obj.time / 10;
            obj.date = new Date();
            saveNewAtivity();
        }

        console.log('obj', obj);
    }

    // Funções para controle do contador de tempo
    const startTimer = () => {
        setCountSeconds(0);
        setCustomInterval(
            setInterval(() => {
                setCountSeconds((value) => value + 1)
            }, 1000)
        )
    }

    const stopTimer = () => {
        if (customInterval) {
            clearInterval(customInterval);
        }
    }

    // Função que reproduz o som da figura
    function speak(text: string) {
        if (nivel === 2) {
            colorList.map(color => {
                if (question?.color === color.color) {
                    Speech.speak(text + ' ' + color.name);
                }
            })
        } else {
            Speech.speak(text);
        }
    }

    const Item = ({ Item }: { Item: IGeometricShape }) => {
        return (
            <Button p={2} m={1} borderWidth={1} borderRadius={5} borderColor={'primary.dark'} onPress={() => validateAnswer(Item)}>
                <Item.svg width={100} height={100} fill={nivel !== 2 ? '#FFF' : Item.color}></Item.svg>
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
                <Box flexDirection={'row'} justifyContent={'space-around'} pt={10} >
                    <IconButton p={1}
                        variant="ghost"
                        onPress={handleBack}
                        _icon={{
                            as: Entypo,
                            name: "chevron-left",
                            color: 'text',
                            size: 8
                        }} />
                    <Progress w={'70%'} size="xl" bg={'#fff'} colorScheme={'primary'} mb={4} value={progress} mt={4} />
                    <Box flexDirection={'row'} mt={3}>
                        <Text fontFamily={'bold'} color={'text'} fontSize={20} pr={2}>{obj.correct}</Text>
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
                            {countSeconds}
                        </Text>
                    </Box>

                    {question &&
                        <Box>
                            <Box p={2} m={1} alignItems={'center'}>
                                <Box p={2} m={1} borderWidth={1} borderRadius={5} borderColor={'primary.dark'} alignItems={'center'}>
                                    {nivel !== 3
                                        ?
                                        <question.svg width={150} height={150} fill={question.color}></question.svg>
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
                                keyExtractor={(item) => nivel !== 2 ? item.id : item.color}
                                numColumns={3}
                                refreshing={true}
                            />
                        }
                    </Box>
                </Box>

            </Box>

            {/* Alert que irá aparecer ao concluir as 10 atividades */}
            <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                <AlertDialog.Content bg={'primary.default'} p={5}>
                    <Box mb={5}>
                        <Text fontFamily="bold" color={'text'} fontSize={16} textAlign={'center'} >Parabéns, você concluiu as atividades!</Text>
                    </Box>
                    <Button onPress={handleBack} ref={cancelRef} bg={'secondary.default'}>
                        <Text fontFamily="bold" color={'text'} justifyContent={'center'} textAlign='center'>Voltar</Text>
                    </Button>
                </AlertDialog.Content>
            </AlertDialog>

        </Center>
    )

}