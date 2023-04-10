import { RouteProp, NavigationProp } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type DataParameters = {
    id: number;
}

export type StackParamList = {
    Detail: DataParameters;
};

export type Props = {
    route: RouteProp<StackParamList, 'Detail'>;
    navigation: NavigationProp<any>;
}

export type PropsDetail = NativeStackScreenProps<StackParamList, 'Detail'>;