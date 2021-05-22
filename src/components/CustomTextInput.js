import React from 'react';
import {TextInput} from 'react-native';

const CustomTextInput = () => {
  const [height, setHeight] = React.useState(42);
  return (
    <TextInput
      style={{height: height}}
      onContentSizeChange={e => setHeight(e.nativeEvent.contentSize.height)}
    />
  );
};

export default CustomTextInput;
