import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../constants';

const Container = props => {
  const {flex, row, center, middle, space, shadow, radius, style, color} =
    props;

  const containerStyles = [
    styles.container,
    flex && {flex},
    flex === false && {flex: 0},
    row && styles.row,
    center && styles.center,
    middle && styles.middle,
    radius && styles.radius,
    space && {justifyContent: `space-${space}`},
    shadow && styles.shadow,
    color && styles[color],
    color && !styles[color] && {backgroundColor: color},
    style,
  ];
  return (
    <View style={containerStyles} {...props.props}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  radius: {
    borderRadius: theme.Sizes.radius,
  },
  shadow: {
    shadowColor: theme.Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: theme.Sizes.base / 1.5,
  },
  blue: {backgroundColor: theme.Colors.blue},
  purple: {backgroundColor: theme.Colors.purple},
  black: {backgroundColor: theme.Colors.black},
  white: {backgroundColor: theme.Colors.white},
  gray: {backgroundColor: theme.Colors.gray},
  gray2: {backgroundColor: theme.Colors.gray2},
  gray3: {backgroundColor: theme.Colors.gray3},
});

export default Container;
