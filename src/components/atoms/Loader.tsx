import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';

import {Box, useTheme} from '../../theme/Theme';

const Loader = () => {
  const theme = useTheme();
  return (
    <Box style={styles.container} zIndex={1}>
      <ActivityIndicator color={theme.colors.mainForeground} />
    </Box>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
