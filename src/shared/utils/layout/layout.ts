import { Dimensions, PixelRatio, Platform } from 'react-native';

export const { width, height } = Dimensions.get('window');
export const { width: screenWidth, height: screenHeight } =
  Dimensions.get('screen');
export const hp = (percentage: number) =>
  Math.round((percentage * height) / 100);
export const wp = (percentage: number) =>
  Math.round((percentage * width) / 100);
export const ww = width;
export const wh = height;

// paste your mockup sizes
const MOCKUP_WIDTH = 428;
const MOCKUP_HEIGHT = 926;

/**
 * Get size with scale factor
 *
 * @param {number} size - original size
 */
export function getWidthWithScaleFactor(size: number): number {
  // @Note: 360 x 640 - mockup sizes
  // @Note: 365 x 667 - iPhone 6 sizes (+ pixel ration equal 2)
  return PixelRatio.roundToNearestPixel(size * (width / MOCKUP_WIDTH));
}
/**
 * Get size with scale factor
 *
 * @param {number} size - original size
 */
export function getHeightWithScaleFactor(size: number): number {
  // @Note: 360 x 640 - mockup sizes
  // @Note: 365 x 667 - iPhone 6 sizes (+ pixel ration equal 2)
  return PixelRatio.roundToNearestPixel(size * (height / MOCKUP_HEIGHT));
}

/**
 * Get font with scale factor
 *
 * @param {number} size - original size
 */
export function getFontWithScaleFactor(size: number) {
  return PixelRatio.roundToNearestPixel(size * (height / MOCKUP_HEIGHT));
}

/**
 * Iphones with safe area should not have padding for bottom elements as
 * designs require. So we have no padding for bottom elements on ios with notch and
 * some padding for bottom elements on android
 */
export function paddingBottomCalculation() {
  const iphoneHasSafeArea = Platform.OS === 'ios' ? 'none' : 'l';
  return iphoneHasSafeArea;
}