import React from 'react';
import {Box, Text} from '../../theme/Theme';

type CardFrontProps = {
  flashcardFront: string;
};

const CardFront = ({flashcardFront}: CardFrontProps) => {
  return (
    <Box backgroundColor="transparent" justifyContent="center">
      <Text variant="title3" color="text">
        {flashcardFront}
      </Text>
    </Box>
  );
};

export default CardFront;
