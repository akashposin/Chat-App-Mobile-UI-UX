import React from 'react';
import {Image, TextInput} from 'react-native';
import {Container, GradientContainer} from '.';
import {icons, theme} from '../constants';

const SearchBar = () => {
  const [text, setText] = React.useState('');

  return (
    <GradientContainer
      startColor="#8720dc"
      endColor="#aa37ce"
      style={{
        height: 50,
        width: theme.Sizes.width / 1.3,
        elevation: 20,
        borderRadius: 100,
      }}
      opacity={1}>
      <Container row center shadow>
        <Container>
          <TextInput
            style={{
              ...theme.Fonts.messagesBody,
              fontSize: theme.Sizes.F15,
              color: theme.Colors.white,
              paddingLeft: theme.Sizes.padding * 1.5,
            }}
            editable
            multiline
            underlineColorAndroid="transparent"
            selectionColor={theme.Colors.white}
            placeholderTextColor={theme.Colors.white}
            placeholder="Search..."
            onChange={() => setText(text)}
          />
        </Container>
        <Container flex={false}>
          <Image
            source={icons.Search}
            resizeMode="contain"
            style={{height: 18, width: 18, paddingRight: theme.Sizes.F22 * 3}}
          />
        </Container>
      </Container>
    </GradientContainer>
  );
};

export default SearchBar;
