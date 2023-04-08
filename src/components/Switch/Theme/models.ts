import { IconName } from '../../Icon/models';
import { StyleProp, ViewStyle } from "react-native";

export type PropsSwitchTheme = {
    testID?: string;
    wrapper?: StyleProp<ViewStyle>;
}

export type IconTheme = {
    id: string;
    icon: IconName;
}