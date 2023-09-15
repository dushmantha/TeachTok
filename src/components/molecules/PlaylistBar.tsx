import React from 'react';
import {Box, Text} from '../../theme/Theme';

import SVGPlay from '../../assets/play.svg';
import SVGArrow from '../../assets/arrow.svg';

type MCQQuestionProps = {
  playlist: string;
};

const PlaylistBar = ({playlist}: MCQQuestionProps) => {
  return (
    <Box
      backgroundColor="playlist"
      height={50}
      flexDirection="row"
      paddingHorizontal="l"
      justifyContent="space-between"
      alignItems="center">
      <Box flexDirection="row" left={0.9}>
        <SVGPlay width={25} height={25} color="white" />
        <Text
          variant="body"
          color="text"
          textAlign="center"
          marginHorizontal="m">
          {playlist}
        </Text>
      </Box>
      <Box left={0.1}>
        <SVGArrow width={20} height={20} color="white" />
      </Box>
    </Box>
  );
};

export default PlaylistBar;
