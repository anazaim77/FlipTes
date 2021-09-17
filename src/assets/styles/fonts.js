export const FontFamily = {
  thin: {
    fontFamily: 'Lato-Thin',
  },
  light: {
    fontFamily: 'Lato-Light',
  },
  reg: {
    fontFamily: 'Lato-Regular',
  },
  bold: {
    fontFamily: 'Lato-Bold',
  },
  black: {
    fontFamily: 'Lato-Black',
  },
};

export default {
  thin_10: {
    fontSize: 10,
    ...FontFamily.thin,
  },
  light_10: {
    fontSize: 10,
    ...FontFamily.light,
  },
  reg_10: {
    fontSize: 10,
    ...FontFamily.reg,
  },
  reg_14: {
    fontSize: 14,
    ...FontFamily.reg,
  },
  bold_10: {
    fontSize: 10,
    ...FontFamily.bold,
  },
  bold_12: {
    fontSize: 12,
    ...FontFamily.bold,
  },
  bold_24: {
    fontSize: 24,
    ...FontFamily.bold,
  },
  black_10: {
    fontSize: 10,
    ...FontFamily.black,
  },
};
