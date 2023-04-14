import React from 'react';
import {Text, TextStyle, StyleProp} from 'react-native';
import {typographyDarkStyle, typographyLightStyle} from './textStyles';
import {useColorScheme} from 'hooks/useColorScheme';
import Theme from 'theme';

export type TypographyTypes =
  | 'header'
  | 'title'
  | 'subtitle'
  | 'paragraph'
  | 'caption1'
  | 'caption2'
  | 'caption3'
  | 'caption4';

export type FontWeightTypes = 'Regular' | 'Medium' | 'Bold' | 'Light';

export interface CustomTextProps {
  text: string;
  textAlign?: TextStyle['textAlign'];
  textColor?: TextStyle['color'];
  typography?: TypographyTypes;

  fontWeight?: FontWeightTypes;
  fontSize?: number;
  numberOfLines?: number;
  transform?: TextStyle['textTransform'];
  underline?: boolean;
  allowFontScaling?: boolean;
  spacing?: number;
  lineHeight?: number;
}

const CustomText: React.FC<CustomTextProps> = ({
  text,
  typography = 'paragraph',
  textColor,
  textAlign,
  fontWeight,
  fontSize,
  numberOfLines,
  transform,
  underline,
  allowFontScaling,
  spacing,
  lineHeight,
}: CustomTextProps) => {
  const {colorScheme} = useColorScheme();

  const style =
    colorScheme === 'dark' ? typographyDarkStyle : typographyLightStyle;

  const textStyle: StyleProp<TextStyle> = [];
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

  if (fontSize) {
    textStyle.push({fontSize});
  }
  if (textColor) {
    textStyle.push({color: textColor});
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
        case 'caption4':
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

  return (
    <Text
      style={[
        textStyle,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          textAlign,
          textTransform: transform,
          textDecorationLine: underline ? 'underline' : 'none',
          letterSpacing: spacing,
          lineHeight,
        },
      ]}
      ellipsizeMode="tail"
      numberOfLines={numberOfLines}
      allowFontScaling={allowFontScaling}>
      {text}
    </Text>
  );
};

export {CustomText};
