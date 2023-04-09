import React from 'react';
import { View } from 'react-native';
//additional components
import ButtonTap from './ButtonTap';
//models
import { PropsCustomTab } from './models';
//styles
import { styles } from './styles';
//constant
import { ICON_TAP } from './constant';
//component
const CustomTab = ({
    state,
    descriptors,
    navigation }: PropsCustomTab) => (
    <View style={[styles.container]}>
        {
            state?.routes.map((route: any, i: any) => {
                const { options } = descriptors[route?.key],
                    label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route?.name,
                    isFocused = state.index === i,
                    //@ts-ignore
                    icon = ICON_TAP[route?.name || 'home'],
                    onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route?.key,
                        });
                        if (!isFocused && !event.defaultPrevented)
                            navigation.navigate(route?.name);
                    };
                return (
                    <ButtonTap
                        key={`buttonTap_${i}`}
                        isFocused={isFocused}
                        icon={icon}
                        options={options}
                        onPress={onPress} />
                );
            })
        }
    </View>
);
export default CustomTab;   