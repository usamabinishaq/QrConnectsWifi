import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {RootStackParamList} from '../../navigators/AppNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export default function () {
  const navigation = useNavigation<ScreenNavigationProp>();

  useEffect(() => {
    const id = setTimeout(() => {
      navigation.replace('BottomTabs');
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{`QR CONNECTS WIFI`}</Text>
    </View>
  );
}
