import React from 'react';
import {Dimensions} from 'react-native';
import {Box, Text} from '../../theme/Theme';

type KnowledgeRateButtonContantProps = {
  color: string;
  text: string;
};

const KnowledgeRateButtonContant = ({
  color,
  text,
}: KnowledgeRateButtonContantProps) => {
  const {width} = Dimensions.get('window');
  return (
    <Box
      alignItems="center"
      width={width / 9}
      height={width / 9}
      justifyContent="center"
      alignContent="center"
      marginEnd="s"
      borderRadius="s"
      style={{backgroundColor: color}}>
      <Text variant="body" textAlign="center">
        {text}
      </Text>
    </Box>
  );
};

export default KnowledgeRateButtonContant;
