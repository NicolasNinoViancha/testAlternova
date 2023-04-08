import React from 'react';
import LoginScreen from '@src/features/Login/container';
import { PropsScreen } from '@src/features/Login/models';

const ProfileScreen = (props: PropsScreen) => (<LoginScreen {...props} />);

export default ProfileScreen;