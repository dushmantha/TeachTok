import React from 'react';
import {StyleSheet} from 'react-native';

import {Box, useTheme, Text} from '../../theme/Theme';

const EmptyView = () => {
  const theme = useTheme();
  return (
    <Box style={styles.container}>
      <Text variant="body" style={{color: theme.colors.text}}>
        Empty
      </Text>
    </Box>
  );
};

EmptyView.defaultProps = {variant: 'default'};

export default EmptyView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
