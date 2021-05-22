import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Colors = {
  blue: '#6E00DD',
  purple: '#a826c7',
  black: '#171719',
  white: '#FFFFFF',
  chatSmall: '#63697B',
  green: '#84C857',
  gray: '#BFC4D3',
  gray2: '#EAECF2',
  gray3: '#F3F4F9',
};

export const Sizes = {
  base: 12,
  title: 28,
  small: 10,
  padding: 10,
  padding1: 12,
  padding3: 14,
  radius: 30,
  F13: 13,
  F14: 14,
  F15: 15,
  F16: 16,
  F18: 18,
  F20: 20,
  F22: 22,
  F24: 24,
  F28: 28,
  width,
  height,
};

export const Fonts = {
  chatFont: {
    fontFamily: 'FiraSans-Regular',
    fontSize: Sizes.base,
    color: Colors.chatSmall,
  },
  chatFont14: {
    fontFamily: 'FiraSans-Regular',
    fontSize: Sizes.F14,
  },
  chatFont10: {
    fontFamily: 'FiraSans-Regular',
    fontSize: Sizes.small,
  },
  chatFontBold: {
    fontFamily: 'Arial-BoldMT',
    fontSize: Sizes.F16,
  },
  messagesBody: {
    fontFamily: 'ArialMT',
    fontSize: Sizes.F13,
  },
  messagesTitle: {
    fontFamily: 'Arial-BoldMT',
    fontSize: Sizes.F28,
    fontWeight: 'bold',
  },
  messagesCaption: {
    fontFamily: 'Arial-BoldMT',
    fontSize: Sizes.F15,
    fontWeight: 'bold',
    letterSpacing: 0.7,
  },
};

const appTheme = {Colors, Sizes, Fonts};

export default appTheme;
