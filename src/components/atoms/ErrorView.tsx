import React from 'react';
import {StyleSheet} from 'react-native';

import {Box, useTheme, Text} from '../../theme/Theme';

const ErrorView = () => {
  const theme = useTheme();
  return (
    <Box style={styles.container}>
      <Text variant="body" style={{color: theme.colors.text}}>
        Error
      </Text>
    </Box>
  );
};

ErrorView.defaultProps = {variant: 'default'};

export default ErrorView;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
