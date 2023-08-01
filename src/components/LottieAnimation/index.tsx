import AnimatedLottieView, {AnimationObject} from 'lottie-react-native';
import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import QRScanColorFilters from '../../json/QRScanColorFilters';
import {StyleProps} from 'react-native-reanimated';

type ColorFilter = {
  keypath: string;
  color: string;
};
type Props = {
  animationJSON: string | AnimationObject | {uri: string};
  autoPlay?: boolean;
  loop?: boolean;
  speed?: number;
  colorFilters?: ColorFilter[];
  style?: StyleProps;
};

export default function ({
  animationJSON,
  autoPlay = true,
  loop = true,
  speed = 0.75,
  colorFilters,
  style,
}: Props) {
  return (
    <AnimatedLottieView
      style={style}
      source={animationJSON}
      autoPlay={autoPlay}
      loop={loop}
      speed={speed}
      colorFilters={colorFilters}
    />
  );
}
