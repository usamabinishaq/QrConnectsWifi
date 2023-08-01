import React, {useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import styles from './styles';
import StatusBar from '../../../components/StatusBar';
import {colors} from '../../../utils/colors';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

import WifiManager from 'react-native-wifi-reborn';
import Icon from 'react-native-vector-icons/Ionicons';
import Lottie from 'lottie-react-native';
import {ButtonStrings, PermissionStrings} from '../../../constants/Strings';
import {LocationPermission, parseWifiData} from '../../../utils';
import LottieAnimation from '../../../components/LottieAnimation';
import {
  HOWTOSCAN_ANIMATION,
  LOADING_ANIMATION,
  SCANNER_ANIMATION,
} from '../../../constants/Files';
import QRScanColorFilters from '../../../json/QRScanColorFilters';
import SimpleButton from '../../../components/buttons/SimpleButton';
import BarcodeMask from 'react-native-barcode-mask';
import {useDispatch, useSelector} from 'react-redux';
import {getQRHistory, updateHistory} from '../../../redux/qrHistorySlice';

export default function () {
  const [isReady, setReady] = useState<boolean>(false);
  const [animationStarted, setAnimation] = useState<boolean>(false);
  const [isScanned, setScanned] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const QRHistory = useSelector(getQRHistory);

  useEffect(() => {
    console.log('====> ', QRHistory);

    const getPermission = async () => {
      const granted = await LocationPermission();
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // setReady(true);
        // setTimeout(() => {
        //   setAnimation(true);
        // }, 1000);
      } else {
        // Permission denied
        //Need Custom Alert to Ask User to Allow Permission
      }
    };
    getPermission();
  }, []);

  const _onSuccess = (e: any) => {
    if (e.data) {
      const information = parseWifiData(e.data);
      console.log(information);
      dispatch(updateHistory([...QRHistory, information]));
      if (information) {
        setScanned(true);
        setReady(false);
        WifiManager.setEnabled;
        WifiManager.connectToProtectedSSID(
          information.ssid,
          information.password,
          false,
          false,
        ).then(
          () => {
            console.log('Connected successfully!');
          },
          () => {
            console.log('Connection failed!');
          },
        );
      } else {
        Alert.alert('Alert', 'Scanned QR is not a WIfi QR');
      }
    } else {
      setScanned(true);
      setReady(false);
      Alert.alert('Alert', 'Scanned QR is not a WIfi QR');
    }
  };

  const _handleStartScan = () => {
    setReady(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.content}>
        <View style={styles.topContent}>
          <Text style={styles.heading}>
            <Text style={{color: colors.blue}}>{`Scan`}</Text>
            {` QR Code`}
          </Text>
          <Text style={styles.bodyText}>
            {`Place the QR code inside the Frame for accurate results.`}
          </Text>
        </View>
        <View style={styles.bottomContent}>
          {isReady ? (
            <View style={styles.scanner}>
              <QRCodeScanner
                showMarker
                markerStyle={{borderColor: 'red'}}
                cameraTimeout={30000}
                reactivate={true}
                reactivateTimeout={5000}
                cameraStyle={styles.camera}
                containerStyle={styles.scannerContainer}
                cameraContainerStyle={styles.cameraContainer}
                cameraTimeoutView={
                  <View style={styles.cameraTimoutViewStyle}>
                    <Text
                      style={styles.label}>{`Tap to activate scanner`}</Text>
                  </View>
                }
                vibrate={true}
                onRead={_onSuccess}
                flashMode={RNCamera.Constants.FlashMode.off}
              />
            </View>
          ) : (
            <View style={styles.boardingScanner}>
              <LottieAnimation
                animationJSON={HOWTOSCAN_ANIMATION}
                style={{bottom: 100}}
              />
              <SimpleButton title="Scan Now" onPress={_handleStartScan} />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
