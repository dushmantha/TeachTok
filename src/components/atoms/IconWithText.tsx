import React, {ReactNode} from 'react';
import {Box, Text} from '../../theme/Theme';

type IconWithTextProps = {
  isAlignItemsHorizontaly?: boolean;
  text?: string;
  children: ReactNode;
};

const IconWithText = ({
  isAlignItemsHorizontaly = false,
  text,
  children,
}: IconWithTextProps) => {
  return (
    <Box
      flexDirection={isAlignItemsHorizontaly ? 'row' : 'column'}
      alignItems="center"
      justifyContent="center"
      paddingBottom="m"
      alignContent="center">
      {children}
      {text && (
        <Text variant="body" marginStart="s" textAlign="center">
          {text}
        </Text>
      )}
    </Box>
  );
};

export default IconWithText;
