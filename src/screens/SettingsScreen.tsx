import React from 'react';
import Settings from '@src/features/Settings/container';
import { PropsScreen } from '@src/features/Settings/models';

const SettingsScreen = (props: PropsScreen) => (<Settings {...props} />);

export default SettingsScreen;