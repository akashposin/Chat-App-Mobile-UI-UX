import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import Svg, {LinearGradient, Stop, Path} from 'react-native-svg';
import {Badge, Container, CustomStatusBar} from '../components';
import {dummyData, icons, images, theme} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

const Chat = ({navigation}) => {
  const [text, setText] = React.useState('');

  const renderHeader = () => {
    return (
      <Container
        flex={false}
        middle
        center
        shadow
        row
        style={{
          height: 110,
          backgroundColor: theme.Colors.gray3,
          paddingTop: 20,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            paddingLeft: theme.Sizes.padding * 2,
            paddingRight: theme.Sizes.padding * 3,
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.gray_arrow}
            resizeMode="contain"
            style={{height: 20, width: 12}}
          />
        </TouchableOpacity>
        <Container row>
          <Container flex={false} style={{marginRight: theme.Sizes.padding}}>
            <Image
              source={images.Blair_Dota}
              resizeMode="cover"
              style={{height: 50, width: 50, borderRadius: 100}}
            />

            <Badge
              style={{
                position: 'absolute',
                left: 40,
                height: 11,
                width: 11,
                backgroundColor: theme.Colors.green,
              }}
            />
          </Container>
          <Container
            flex={false}
            style={{
              alignItems: 'flex-start',
              paddingRight: theme.Sizes.padding3,
            }}>
            <Text
              style={{
                ...theme.Fonts.messagesCaption,
              }}>
              Blair Dota
            </Text>
            <Text
              style={{
                ...theme.Fonts.messagesBody,
                color: theme.Colors.gray,
              }}>
              Online
            </Text>
          </Container>
          <Container style={{alignItems: 'flex-end'}}>
            {/* <SearchBar /> */}
            <Container
              row
              center
              style={{
                backgroundColor: theme.Colors.gray,
                borderTopLeftRadius: 100,
                borderBottomLeftRadius: 100,
                width: theme.Sizes.width / 3.5,
              }}>
              <Container flex={false}>
                <Image
                  source={icons.Search}
                  resizeMode="contain"
                  style={{
                    height: 18,
                    width: 18,
                    marginLeft: theme.Sizes.padding * 1.5,
                  }}
                />
              </Container>
              <Container>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={{
                    ...theme.Fonts.messagesBody,
                    fontSize: theme.Sizes.F15,
                    color: theme.Colors.white,
                    paddingLeft: theme.Sizes.padding,
                  }}
                  editable
                  multiline={true}
                  selectionColor={theme.Colors.white}
                  placeholderTextColor={theme.Colors.white}
                  onChange={() => setText(text)}
                />
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  };

  const renderChatMessagesData = ({item}) => {
    return (
      <Container flex={false}>
        {/* Gray bubble chat */}
        {item.user.id === 1 ? (
          <Container flex={false} style={{top: -5}}>
            <Container
              flex={false}
              style={{
                width: 231,
                height: 66,
                marginLeft: theme.Sizes.padding3 * 5,
              }}>
              <Svg viewBox="0 0 231 66">
                <Path
                  d="M19 66c-.18 0-.37-.01-.55-.02V66H0l10-10V9a9 9 0 019-9h202a9 9 0 019 9v48a9 9 0 01-9 9H19z"
                  fill={theme.Colors.gray2}
                />
                <Container
                  flex={false}
                  row
                  center
                  style={{
                    width: 220,
                    height: 66,
                  }}>
                  <Text
                    style={{
                      ...theme.Fonts.chatFont,
                      lineHeight: 20,
                      paddingLeft: theme.Sizes.padding * 2,
                      letterSpacing: 0.3,
                    }}>
                    {item.message}
                  </Text>
                </Container>
              </Svg>
            </Container>

            <Container
              flex={false}
              style={{
                top: -theme.Sizes.padding3 * 2.2,
                paddingLeft: theme.Sizes.padding3 * 2.5,
              }}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={{width: 30, height: 30, borderRadius: 30}}
              />
            </Container>

            <Container
              flex={false}
              style={{
                top: -theme.Sizes.padding3 * 2,
                paddingLeft: theme.Sizes.padding3 * 5,
              }}>
              <Text
                style={{
                  ...theme.Fonts.chatFont10,
                  color: theme.Colors.chatSmall,
                }}>
                {item.time}
              </Text>
            </Container>
          </Container>
        ) : item.dogImage ? (
          <Container
            flex={false}
            style={{
              alignItems: 'flex-end',
              paddingRight: theme.Sizes.padding3 * 2.5,
              top: -theme.Sizes.padding * 2,
              marginBottom: theme.Sizes.padding3 * 2,
            }}>
            <Image
              source={item.dogImage}
              resizeMode="contain"
              style={{
                width: 220,
                height: 190,
                borderRadius: theme.Sizes.padding / 1.5,
              }}
            />
          </Container>
        ) : (
          <Container
            flex={false}
            style={{
              alignItems: 'flex-end',
              paddingRight: theme.Sizes.padding3,
              top: -theme.Sizes.padding * 2,
            }}>
            <Container
              flex={false}
              style={{
                width: 231,
                height: 66,
                marginRight: theme.Sizes.padding,
              }}>
              <Svg viewBox="0 0 231 66">
                <LinearGradient
                  id="gradient"
                  gradientUnits="userSpaceOnUse"
                  x1={2.281}
                  y1={0.423}
                  x2={227.168}
                  y2={65.056}>
                  <Stop offset={0} stopColor={theme.Colors.blue} />
                  <Stop offset={1} stopColor={theme.Colors.purple} />
                </LinearGradient>

                <Path
                  d="M212 66H9.81a9 9 0 01-9-9V9a9 9 0 019-9h202a9 9 0 019 9v47.36l9.64 9.64H212z"
                  fill="url(#gradient)"
                />
                <Container
                  flex={false}
                  center
                  middle
                  style={{
                    width: 220,
                    height: 66,
                    paddingHorizontal: theme.Sizes.padding,
                  }}>
                  <Text
                    style={{
                      ...theme.Fonts.chatFont,
                      color: theme.Colors.white,
                      lineHeight: 20,
                      marginRight: theme.Sizes.padding,
                      letterSpacing: 0.3,
                    }}>
                    {item.message}
                  </Text>
                </Container>
              </Svg>
            </Container>

            <Container flex={false} row center>
              <Container
                flex={false}
                style={{
                  top: theme.Sizes.padding / 3,
                  marginRight: theme.Sizes.padding / 2,
                }}>
                <Text
                  style={{
                    ...theme.Fonts.chatFont10,
                    color: theme.Colors.chatSmall,
                  }}>
                  {item.time}
                </Text>
              </Container>
              {item.image && (
                <Container
                  flex={false}
                  style={{
                    marginTop: theme.Sizes.padding / 1.5,
                    marginRight: theme.Sizes.padding,
                  }}>
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={{width: 12, height: 12, borderRadius: 12}}
                  />
                </Container>
              )}
            </Container>
          </Container>
        )}
      </Container>
    );
  };

  const renderChatMessages = () => {
    return (
      <Container style={{backgroundColor: theme.Colors.white}}>
        <FlatList
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          style={{overflow: 'hidden'}}
          data={dummyData.chat}
          keyExtractor={item => `${item.id}`}
          renderItem={renderChatMessagesData}
        />
      </Container>
    );
  };

  const renderBottom = () => {
    return (
      <Container
        flex={false}
        row
        shadow
        center
        color={theme.Colors.white}
        style={{
          paddingHorizontal: theme.Sizes.padding3 * 2,
          height: 60,
        }}>
        <Container
          flex={false}
          center
          middle
          style={{
            backgroundColor: theme.Colors.gray,
            width: 20,
            height: 20,
            borderRadius: 4,
            marginRight: theme.Sizes.base / 2,
          }}>
          <Image
            source={icons.white_arrow}
            resizeMode="contain"
            style={{width: 10, height: 10}}
          />
        </Container>

        <Container flex={false} center middle>
          <Image
            source={icons.Emojis}
            resizeMode="contain"
            style={{width: 22, height: 22}}
          />
        </Container>

        <Container
          style={{
            marginHorizontal: theme.Sizes.base / 2,
          }}>
          <TextInput
            style={{
              ...theme.Fonts.chatFont14,
              color: theme.Colors.black,
              paddingLeft: theme.Sizes.padding * 1.5,
            }}
            editable
            multiline={true}
            underlineColorAndroid="transparent"
            selectionColor={theme.Colors.gray}
            placeholderTextColor={theme.Colors.gray}
            placeholder="Type something"
            value={text}
            onChangeText={setText}
          />
        </Container>

        <Container
          flex={false}
          style={{
            width: 23,
            height: 22,
          }}>
          <TouchableOpacity activeOpacity={0.6} disabled={!text}>
            <Svg viewBox="0 0 23 22">
              <LinearGradient
                id="gradient"
                gradientUnits="userSpaceOnUse"
                x1={0.147}
                y1={0.141}
                x2={22.671}
                y2={21.686}>
                <Stop offset={0} stopColor={theme.Colors.blue} />
                <Stop offset={1} stopColor={theme.Colors.purple} />
              </LinearGradient>
              <Path
                d="M22.52 10.23L1.17.08a.82.82 0 00-.99.23c-.23.3-.24.73-.02 1.04 0 0 4.6 5.51 6.89 8.66.05.07 4.45.99 4.45.99s-4.4.9-4.45.96C4.75 15.11.16 20.65.16 20.65c-.22.31-.21.74.02 1.04.16.2.4.31.64.31.12 0 .24-.03.35-.08l21.35-10.15a.857.857 0 000-1.54z"
                fill={text ? 'url(#gradient)' : theme.Colors.gray}
              />
            </Svg>
          </TouchableOpacity>
        </Container>
      </Container>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['right', 'left']}>
      <CustomStatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {renderHeader()}
      {renderChatMessages()}
      {renderBottom()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});

export default Chat;
