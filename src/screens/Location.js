import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {theme} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomStatusBar} from '../components';

const Location = () => {
  return (
    <SafeAreaView style={styles.container} edges={['right', 'left']}>
      <CustomStatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Text>Location</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Location;
