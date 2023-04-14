import * as React from 'react';
import {ColorValue} from 'react-native';
import {useColorScheme} from 'hooks/useColorScheme';
import Svg, {Path} from 'react-native-svg';
import Theme from 'theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const IconArrow: React.FC<Props> = ({
  color,
  width = 10,
  height = 10,
}: Props) => {
  const {colorScheme} = useColorScheme();

  return (
    <Svg width={width} height={height} viewBox="0 0 10 10">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7.474V10l10-5L0 0v2.526L4.947 5 0 7.474z"
        fill={
          color || colorScheme === 'light'
            ? Theme.Colors.Black
            : Theme.Colors.White
        }
      />
    </Svg>
  );
};

export default IconArrow;
