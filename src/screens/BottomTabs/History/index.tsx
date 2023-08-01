import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

type Props = {};

export default function ({}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{`HISTORY`}</Text>
    </View>
  );
}
