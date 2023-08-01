import {PermissionsAndroid} from 'react-native';
import {ButtonStrings, PermissionStrings} from '../constants/Strings';
import WifiInterface from '../interface/WifiInterface';

export const LocationPermission = async () => {
  return await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: PermissionStrings.LOCATION_TITLE,
      message: PermissionStrings.LOCATION_MESSAGE,
      buttonNegative: ButtonStrings.DENY,
      buttonPositive: ButtonStrings.ALLOW,
    },
  );
};

export const parseWifiData = (data: string) => {
  // Parse the QR code data to extract Wi-Fi information
  // Here's an example assuming the data follows the format "WIFI:T:Type;S:SSID;P:Password;H:Hidden;;"
  const regex = /WIFI:T:(.*?);S:(.*?);P:(.*?);H:(.*?);;/;
  const match = data.match(regex);

  if (match) {
    const type = match[1];
    const ssid = match[2];
    const password = match[3];
    const hidden = match[4] === 'true'; // Convert 'true' string to boolean

    // Return the extracted Wi-Fi information as an object
    return {
      type,
      ssid,
      password,
      hidden,
    };
  }

  // Return null or handle invalid QR code data as needed
  return null;
};
