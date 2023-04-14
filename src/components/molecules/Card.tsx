import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Theme from 'theme';
import {formatNumber} from 'utils/functions';

interface Props {
  title: string;
  points: number;
}

const Card: React.FC<Props> = ({title, points}: Props) => {
  const {container, label, labelTitle, labelPoints} = styles;
  return (
    <View style={container}>
      <Text style={[label, labelTitle]}>{title}</Text>
      <Text style={[label, labelPoints]}>{`${formatNumber(points)} pts`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 143,
    backgroundColor: Theme.Colors.BrightGreek,
    marginHorizontal: 33,
    borderRadius: 20,
    shadowColor: Theme.Colors.Black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Avenir-Black',
    color: Theme.Colors.White,
    textAlign: 'center',
  },
  labelTitle: {
    position: 'absolute',
    top: 21,
    left: 19,
    textTransform: 'capitalize',
  },
  labelPoints: {
    fontSize: 32,
  },
});

export {Card};
