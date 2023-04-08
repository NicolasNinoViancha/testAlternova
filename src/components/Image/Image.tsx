import React, { useState } from 'react';
import { View, Image as RNImage, Platform } from 'react-native';
//additional libraries
import FastImage from 'react-native-fast-image';
//additional components
import Icon from '../Icon';
//models
import { PropsImage } from './models';
//styles
import { styles } from './styles';
import { COLORS } from '@src/theme';
//Component
const Image = ({
    source = '',
    defaultSource,
    resizeMode = 'cover'
}: PropsImage) => {
    //states
    const [errorImage, setErrorImage] = useState<boolean>(false);
    //funtions
    //description : Image upload error detection
    const onError = () => setErrorImage(true);
    //main Component
    if (!source || errorImage)
        return (
            <View style={styles.container}>
                {
                    defaultSource
                        ?
                        <RNImage
                            testID={'componentDefaultImage'}
                            style={styles.container}
                            source={defaultSource}
                            resizeMode={resizeMode} />
                        :
                        <Icon
                            testID='iconCrash'
                            name={'close'}
                            size={30}
                            color={COLORS.common.gray} />
                }
            </View>
        );
    if (Platform.OS === 'ios')
        return (
            <FastImage
                testID={'componentFastImage'}
                onError={onError}
                style={styles.container}
                source={{
                    uri: source,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={resizeMode} />
        );
    return (
        <RNImage
            testID={'componentImage'}
            onError={onError}
            style={styles.container}
            source={{ uri: source }}
            resizeMode={resizeMode} />
    );
};
export default Image;