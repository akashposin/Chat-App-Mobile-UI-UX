import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomStatusBar} from '../components';

const Home = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <CustomStatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Text>Home</Text>
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

export default Home;
