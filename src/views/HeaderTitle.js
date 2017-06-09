/* @flow */

import React from 'react';

import { Dimensions, Platform, StyleSheet, Text } from 'react-native';

import type { Style } from '../TypeDefinition';



type Props = {
  tintColor?: ?string,
  style?: Style,
};

const HeaderTitle = ({ style, ...rest }: Props) => (
  <Text
    numberOfLines={1}
    {...rest}
    style={[styles.title, style]}
    accessibilityTraits="header"
  />
);

const styles = StyleSheet.create({
  title: {
    fontSize: Platform.OS === 'ios' ? 17 : 25,
    fontWeight: Platform.OS === 'ios' ? '600' : '500',
    color: '#9396A9',
    textAlign: Platform.OS === 'ios' ? 'center' : 'center',
    marginHorizontal: 16,
  },
});

export default HeaderTitle;
