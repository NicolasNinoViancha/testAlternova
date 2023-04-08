import { ResizeMode } from "react-native-fast-image";
import { ImageSourcePropType } from 'react-native';

export type PropsImage = {
    testID?: string;
    source: string;
    defaultSource?: ImageSourcePropType;
    resizeMode?: ResizeMode;
}