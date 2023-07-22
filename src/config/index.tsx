import { Dimensions, Platform, StatusBar } from 'react-native';
import {Colors} from './colors'
import {Fonts} from './fonts'

const isIOS = Platform.OS === 'ios';
const { width, height } = Dimensions.get('window');

function isIphoneX() {
  const dim = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    (dim.height === 780 ||
      dim.width === 780 ||
      dim.height === 812 || //iphone X, 12 mini, iphone 11 pro,
      dim.width === 812 ||
      dim.height === 844 || //12 pro
      dim.width === 844 ||
      dim.height === 896 || //iphone 11 pro max
      dim.width === 896 ||
      dim.height === 926 || //iphone 12 pro max
      dim.width === 926)
  );
}
function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}
function getStatusBarHeight(safe?: boolean) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
}
function getBottomSpace() {
  return isIphoneX() ? 34 : 0;
}

export {
  width as fullWidth,
  height as fullHeight,
  isIOS,
  getStatusBarHeight,
  isIphoneX,
  ifIphoneX,
  getBottomSpace,
  Colors,
  Fonts,
};
