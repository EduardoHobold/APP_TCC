import React from 'react';
import { Box } from 'native-base';

import LottieView from 'lottie-react-native';

import loadingCube from '../../assets/loadingCube.json';

export function LoadAnimation() {
    return (
        <Box justifyContent={'center'} alignItems={'center'} >
            <LottieView
                source={loadingCube}
                style={{ height: 200 }}
                resizeMode="contain"
                autoPlay
                loop
            />
        </Box>
    );
}