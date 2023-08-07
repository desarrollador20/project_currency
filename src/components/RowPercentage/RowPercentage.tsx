import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {RFPercentage} from 'react-native-responsive-fontsize';

interface Props {
  title: string;
  value: string;
}

export const RowPercentage = ({title, value}: Props) => {
  return (
    <Text style={{fontSize: RFPercentage(2.5)}}>
      {title}
      <Text style={{color: value.includes('-') ? 'red' : 'green'}}>
        {value}{' '}
      </Text>
      <Icon
        name={value.includes('-') ? 'trending-down' : 'trending-up'}
        color={value.includes('-') ? 'red' : 'green'}
        size={20}
      />
    </Text>
  );
};
