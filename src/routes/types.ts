import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';


export type StackNavigatorParamList = {
  Inicio: undefined;
  Atividades: { nivel: number, user: string };
};

export type BottomTabParamList = {
  Home: undefined;
  Resultados: undefined;
  Perfil: undefined;
};

export type HomeNavigationProp = NativeStackNavigationProp<StackNavigatorParamList, 'Inicio'>;
// export type HomeNavigationProp = CompositeScreenProps<
//   BottomTabScreenProps<BottomTabParamList, 'Home'>,
//   StackScreenProps<StackNavigatorParamList>
// >;