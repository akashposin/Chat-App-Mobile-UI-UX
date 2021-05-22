import rgba from 'hex-to-rgba';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../constants';

const GradientContainer = props => {
  const {startColor, endColor, opacity} = props;
  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      colors={[rgba(startColor, `${opacity}`), rgba(endColor, `${opacity}`)]}
      style={{...props.style}}>
      {props.children}
    </LinearGradient>
  );
};

GradientContainer.defaultProps = {
  startColor: theme.Colors.blue,
  endColor: theme.Colors.purple,
  opacity: 0.2,
};

export default GradientContainer;
