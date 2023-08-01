import {StyleSheet} from 'react-native';
import {HEIGHT_SCREEN, WIDTH_SCREEN} from '../../../utils/dimensions';
import {colors} from '../../../utils/colors';
import {FontFamily} from '../../../constants/Strings';

export default StyleSheet.create({
  container: {
    width: WIDTH_SCREEN * 0.75,
    height: HEIGHT_SCREEN * 0.05,
    borderRadius: 5,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: FontFamily.NUNITO_BOLD,
    color: colors.white,
  },
});
