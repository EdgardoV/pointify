import React, {ReactNode} from 'react';
import {StyleProp, TextStyle, Text} from 'react-native';
import {useColorScheme} from 'hooks';
import Theme from 'theme';

import {typographyDarkStyle, typographyLightStyle} from './textStyles';
import {FontWeightTypes, TypographyTypes} from './CustomText';

export interface TextSpanProps {
  text?: string;
  textAlign?: TextStyle['textAlign'];
  textColor?: TextStyle['color'];
  typography?: TypographyTypes;

  fontWeight?: FontWeightTypes;

  marginRight?: number;
  marginLeft?: number;
  marginTop?: number;
  marginBottom?: number;
  fontSize?: number;

  children?: ReactNode;
  onPress?: () => void;

  transform?: TextStyle['textTransform'];
  underline?: boolean;
  spacing?: number;
  lineHeight?: number;
}

const TextSpan: React.FC<TextSpanProps> = ({
  text = '',
  typography = 'paragraph',
  textColor,
  textAlign,
  fontWeight,
  children,
  onPress,
  fontSize,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  transform,
  underline,
  spacing,
  lineHeight,
}) => {
  const {colorScheme} = useColorScheme();

  const style =
    colorScheme === 'dark' ? typographyDarkStyle : typographyLightStyle;
  const textStyle: StyleProp<TextStyle> = [];

  const defineTypography = () => {
    switch (typography) {
      case 'header':
        textStyle.push(style.header);
        break;
      case 'title':
        textStyle.push(style.title);
        break;
      case 'subtitle':
        textStyle.push(style.subtitle);
        break;
      case 'paragraph':
        textStyle.push(style.paragraph);
        break;
      case 'caption1':
        textStyle.push(style.caption1);
        break;
      case 'caption2':
        textStyle.push(style.caption2);
        break;
      default:
        break;
    }
  };

  if (children) {
    defineTypography();

    textStyle.push({
      color: textColor || Theme.Colors.PrimaryText[colorScheme],
      textAlign: textAlign || 'auto',
    });
  } else {
    if (typography) {
      defineTypography();
    }
    if (textColor) {
      textStyle.push({color: textColor});
    }
    if (textAlign) {
      textStyle.push({textAlign});
    }
  }

  if (fontSize) {
    textStyle.push({fontSize});
  }

  if (fontWeight) {
    let selectedWeight: FontWeightTypes = 'Regular';

    if (fontWeight) {
      selectedWeight = fontWeight;
    } else {
      switch (typography) {
        case 'caption1':
          selectedWeight = 'Regular';
          break;
        case 'caption2':
          selectedWeight = 'Regular';
          break;
        case 'header':
          selectedWeight = 'Medium';
          break;
        case 'paragraph':
          selectedWeight = 'Regular';
          break;
        case 'subtitle':
          selectedWeight = 'Regular';
          break;
        case 'title':
          selectedWeight = 'Medium';
          break;
        default:
          break;
      }
    }

    textStyle.push({
      fontFamily: Theme.Fonts[selectedWeight],
    });
  }

  textStyle.push({
    marginBottom,
    marginTop,
    marginLeft,
    marginRight,
    textTransform: transform,
    textDecorationLine: underline ? 'underline' : 'none',
    letterSpacing: spacing,
    lineHeight,
  });

  return (
    <Text onPress={onPress} style={textStyle}>
      {children || text}
    </Text>
  );
};

export {TextSpan};
