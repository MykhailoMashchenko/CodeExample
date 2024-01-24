import { StyleSheet } from 'react-native';

export const commonFlex = StyleSheet.create({
  alignCenterRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  alignItemsStretch: {
    alignItems: 'stretch',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  directionColumnAlignStart: {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  directionRow: {
    flexDirection: 'row',
  },
  directionRowAlignEnd: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  directionRowFlexWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flexContainer: {
    flex: 1,
  },
  flexContainerGrow: {
    flexGrow: 1,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  horizontalAlign: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rowAlignStretchJustifyContentSpaceBetween: {
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const commonFallback = StyleSheet.create({
  fallbackButton: {
    minWidth: 120,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export const fallbackContainer = commonFallback.fallbackContainer;

export const fallbackButton = commonFallback.fallbackButton;
