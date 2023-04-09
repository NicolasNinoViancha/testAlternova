import { StyleProp, ViewStyle } from "react-native"

export type PropsButtonText = {
    wrapper?: StyleProp<ViewStyle>;
    text?: string;
    type?: 'PRIMARY' | 'SECUNDARY';
    disable?: boolean;
    onPress: () => void;
}