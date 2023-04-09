import React from 'react';
import Home from '@src/features/Home/container';
import { PropsScreen } from '@src/features/Home/models';

const HomeScreen = (props: PropsScreen) => (<Home {...props} />);

export default HomeScreen;