import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from 'react-native';
import {theme, icons, dummyData} from '../constants';
import {
  Badge,
  Container,
  CustomStatusBar,
  GradientContainer,
  SearchBar,
} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';

const Messages = ({navigation}) => {
  const renderHeader = () => {
    return (
      <GradientContainer
        opacity={1}
        style={{
          flexDirection: 'row',
          height: 110,
        }}>
        <Container center row style={{paddingTop: theme.Sizes.padding * 2}}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              paddingLeft: theme.Sizes.padding * 2,
              paddingRight: theme.Sizes.padding * 3,
            }}
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.white_arrow}
              resizeMode="contain"
              style={{height: 20, width: 12}}
            />
          </TouchableOpacity>
          <SearchBar />
        </Container>
      </GradientContainer>
    );
  };

  const renderTitle = () => {
    return (
      <Container
        flex={0.2}
        style={{
          marginBottom: theme.Sizes.padding * 3,
        }}>
        <Text
          style={{
            ...theme.Fonts.messagesTitle,
            marginTop: theme.Sizes.padding * 2,
            marginLeft: theme.Sizes.padding * 2,
            letterSpacing: 1.5,
          }}>
          Messages
        </Text>
        <Text
          style={{
            ...theme.Fonts.messagesFont,
            marginLeft: theme.Sizes.padding * 2,
            top: theme.Sizes.padding / 3,
            color: theme.Colors.gray,
            letterSpacing: 1.5,
          }}>
          You have 2 new messages
        </Text>
      </Container>
    );
  };

  const renderProfileData = ({item}) => {
    return (
      <>
        <Container flex={false} middle>
          <Container
            row
            flex={false}
            center
            color={item.selected ? theme.Colors.gray3 : theme.Colors.white}>
            {item.selected && (
              <GradientContainer
                startColor={theme.Colors.purple}
                endColor={theme.Colors.blue}
                opacity={1}
                style={{
                  height: '100%',
                  width: 6,
                  marginRight: -6,
                }}
              />
            )}

            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                marginHorizontal: theme.Sizes.padding * 1.5,
                flexDirection: 'row',
                marginVertical: theme.Sizes.padding * 1.5,
              }}
              onPress={() => navigation.navigate('Chat')}>
              <Container flex={0.7}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{height: 50, width: 50, borderRadius: 30}}
                />
                {item.badge && (
                  <Badge
                    style={{
                      position: 'absolute',
                      left: 40,
                      height: 11,
                      width: 11,
                      backgroundColor: theme.Colors.green,
                    }}
                  />
                )}
              </Container>
              <Container flex={3} style={{marginLeft: theme.Sizes.padding}}>
                <Text
                  style={{
                    ...theme.Fonts.messagesCaption,
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    ...theme.Fonts.messagesBody,
                    color: theme.Colors.gray,
                  }}>
                  {item.message}
                </Text>
              </Container>
              <Container style={{alignItems: 'flex-end'}}>
                <Text
                  style={{
                    ...theme.Fonts.messagesBody,
                    color: theme.Colors.gray,
                  }}>
                  {item.date}
                </Text>
              </Container>
            </TouchableOpacity>
          </Container>
        </Container>
        <Container
          flex={false}
          style={{
            backgroundColor: theme.Colors.gray,
            height: 0.5,
          }}
        />
      </>
    );
  };

  const renderProfiles = () => {
    return (
      <Container>
        <FlatList
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          style={{overflow: 'hidden'}}
          data={dummyData.profiles}
          keyExtractor={item => `${item.id}`}
          renderItem={renderProfileData}
        />
      </Container>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <GradientContainer>
        <CustomStatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
      </GradientContainer>
      {renderHeader()}
      {renderTitle()}
      {renderProfiles()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});

export default Messages;
