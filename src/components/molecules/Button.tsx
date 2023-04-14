import React from 'react';
import {TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import {TextContainer} from './TextContainer';
import Theme from 'theme';

interface Props {
  label: string;
  style?: ViewStyle;
  onPress: () => void;
}

const Button: React.FC<Props> = ({label, style, onPress}: Props) => {
  const {container} = styles;

  return (
    <TouchableOpacity
      testID="button"
      activeOpacity={0.8}
      style={[container, style]}
      onPress={onPress}>
      <TextContainer
        text={label}
        textAlign="center"
        textColor={Theme.Colors.White}
        fontWeight="Bold"
        fontSize={12}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.BrightGreek,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
  },
});

export {Button};
