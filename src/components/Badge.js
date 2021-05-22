import React from 'react';
import {StyleSheet} from 'react-native';
import {theme} from '../constants';
import Container from './Container';

const Badge = props => {
  const {size, color, style} = props;
  const badgeStyles = StyleSheet.flatten([
    styles.badge,
    size && {
      height: size,
      width: size,
      borderRadius: size,
    },
    style,
  ]);
  return (
    <Container flex={false} middle center color={color} style={badgeStyles}>
      {props.children}
    </Container>
  );
};

const styles = StyleSheet.create({
  badge: {
    height: theme.Sizes.base,
    width: theme.Sizes.base,
    borderRadius: theme.Sizes.radius,
    borderColor: theme.Colors.white,
    borderWidth: 1,
  },
});

export default Badge;
