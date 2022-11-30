import React from 'react';
import { Box } from 'native-base';

import LottieView from 'lottie-react-native';

import loadingCube from '../../assets/loadingCube.json';

export function LoadAnimation() {
    return (
        <Box flex={1} justifyContent={'center'} alignItems={'center'} >
            <LottieView
                source={loadingCube}
                style={{ height: 250 }}
                resizeMode="contain"
                autoPlay
                loop
            />
        </Box>
    );
}