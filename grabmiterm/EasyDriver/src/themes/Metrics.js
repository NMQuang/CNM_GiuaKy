import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 20,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 100,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? height / 9 : height / 9,
  buttonRadius: 4,
  mapHeight: (height * 5) / 9,
  statusHeight: ((height * 3) / 9) - 20,
  statusWidth: width,
  icons: {
    tiny: 15,
    small: 25,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 150
  }
};

export default metrics;

