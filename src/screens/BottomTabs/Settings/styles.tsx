import {StyleSheet} from 'react-native';
import {FontFamily} from '../../../constants/Strings';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading: {
    color: 'black',
    fontSize: 20,
    letterSpacing: 0.25,
    fontFamily: FontFamily.NUNITO_BOLD,
  },
});
