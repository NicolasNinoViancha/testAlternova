import { IconName } from "@src/components/Icon/models";

export type PropsCustomTab = {
    state: any;
    descriptors: any;
    navigation: any;
}

export type Screens = {
    Home: IconName;
    Settings: IconName;
}

export type PropsButtonTap = {
    testID?: string;
    isFocused?: boolean;
    icon: IconName;
    options: any;
    onPress: () => void;
}