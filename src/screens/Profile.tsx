import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import {Box, Text, useTheme} from '../theme/Theme';

const Profile = () => {
  const theme = useTheme();
  return (
    <Box flex={1} justifyContent="center">
      <LinearGradient
        colors={[
          theme.colors.linearGradientTopRight,
          theme.colors.linearGradientTopLeft,
          theme.colors.linearGradientBottomLeft,
        ]}
        style={styles.linearGradient}>
        <Text variant="body">Profile</Text>
      </LinearGradient>
    </Box>
  );
};

export default Profile;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
