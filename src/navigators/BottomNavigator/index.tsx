import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import History from '../../screens/BottomTabs/History';
import Scan from '../../screens/BottomTabs/Scan';
import Generate from '../../screens/BottomTabs/Generate';
import Icon from 'react-native-vector-icons/Ionicons';
import Settings from '../../screens/BottomTabs/Settings';
import {colors} from '../../utils/colors';
import {FontFamily} from '../../constants/Strings';

export type BottomTabParamList = {
  History: undefined;
  Scan: undefined;
  Generate: undefined;
  Settings: undefined;
};
const BottomTab = createBottomTabNavigator<BottomTabParamList>();
export default function () {
  return (
    <BottomTab.Navigator
      initialRouteName="Scan"
      //   detachInactiveScreens={false}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarInactiveTintColor: colors.silver,
        tabBarStyle: {elevation: 2.5, borderTopWidth: 0, height: 50},
        tabBarLabelStyle: {
          fontFamily: FontFamily.NUNITO_REGULAR,
          fontSize: 11,
          lineHeight: 20,
        },
        tabBarActiveTintColor: colors.blue,
        tabBarIcon: ({color, size, focused}) => {
          let iconName = '';
          if (route.name === 'Scan')
            iconName = focused ? 'scan' : 'scan-outline';
          else if (route.name === 'History')
            iconName = focused ? 'ios-time' : 'ios-time-outline';
          else if (route.name === 'Generate')
            iconName = focused ? 'create' : 'create-outline';
          else if (route.name === 'Settings')
            iconName = focused ? 'ios-settings' : 'ios-settings-outline';

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <BottomTab.Screen name="Scan" component={Scan} />
      <BottomTab.Screen name="Generate" component={Generate} />
      <BottomTab.Screen name="History" component={History} />
      <BottomTab.Screen name="Settings" component={Settings} />
    </BottomTab.Navigator>
  );
}
