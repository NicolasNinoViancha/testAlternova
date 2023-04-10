import React from 'react';
import Detail from '@src/features/Detail/container';
import { PropsDetail } from '@src/features/Detail/models';

const DetailScreen = (props: PropsDetail) => (<Detail {...props} />);

export default DetailScreen;