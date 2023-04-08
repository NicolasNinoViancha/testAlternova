import { IconName } from "@src/components/Icon/models";
import { StyleProp, ViewStyle } from "react-native";

type Error = {
    isError: boolean;
    error?: string;
}

export type PropsInput = {
    testID?: string;
    wrapper?: StyleProp<ViewStyle>;
    placeholder?: string;
    value?: string;
    icon?: IconName;
    error?: Error;
    onChange: (value: string) => void;
    onBlur: () => void;
}