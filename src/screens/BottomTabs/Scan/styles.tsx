import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
import {HEIGHT_SCREEN, WIDTH_SCREEN} from '../../../utils/dimensions';
import {FontFamily} from '../../../constants/Strings';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH_SCREEN,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    width: '90%',
    margin: '5%',
    alignSelf: 'center',
  },
  topContent: {
    flex: 0.15,
    width: '100%',
    justifyContent: 'center',
  },

  heading: {
    fontFamily: FontFamily.NUNITO_BOLD,
    color: 'black',
    fontSize: 24,
    lineHeight: 40,
    letterSpacing: 0.25,
  },
  bodyText: {
    fontFamily: FontFamily.NUNITO_REGULAR,
    textAlign: 'left',
    color: colors.lightGray,
    fontSize: 14,

    letterSpacing: 0.25,
  },
  bottomContent: {
    flex: 0.85,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanner: {
    flex: 1,
    width: '100%',
  },
  scannerContainer: {
    width: '100%',
    height: '100%',
  },
  cameraContainer: {
    width: '100%',
    height: '85%',
  },
  camera: {width: '100%', height: '100%'},
  cameraTimoutViewStyle: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  loader: {height: 100},
  boardingScanner: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    fontFamily: FontFamily.NUNITO_BOLD,
    fontSize: 16,
    color: colors.white,
  },
});
