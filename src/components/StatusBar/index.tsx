import {
  StatusBar,
  StatusBarProps,
  StatusBarStyle,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

type Props = {
  barStyle?: StatusBarStyle;
  color?: string;
};
export default function ({
  barStyle = 'dark-content',
  color = colors.white,
}: Props) {
  return <StatusBar barStyle={barStyle} backgroundColor={color} />;
}
