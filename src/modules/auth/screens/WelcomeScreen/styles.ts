import { StyleSheet } from 'react-native';
import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
  wh,
  ww,
} from 'src/shared/utils/layout/layout';

export default StyleSheet.create({
  animation: {
    height: wh,
    marginBottom: getHeightWithScaleFactor(12),
    width: wh,
  },
  backgroundContainer: {
    bottom: 0,
    flex: 1,
    height: 788,
    position: 'absolute',
    width: '75%',
  },
  backgroundContainerImage: {
    resizeMode: 'stretch',
  },
  bottomButtonBlock: {
    marginTop: getHeightWithScaleFactor(58),
  },
  bottomButtons: {
    marginBottom: getHeightWithScaleFactor(14),
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: getWidthWithScaleFactor(16),
  },
  imageBackground: {
    height: ww,
    width: ww, // scaling of image
  },
  imageBackgroundResize: {
    resizeMode: 'stretch',
  },
  titleBlock: {
    flex: 1,
    left: -getWidthWithScaleFactor(24), // adjusting animation as on designs in figma
    position: 'absolute',
    top: 0,
  },
});
