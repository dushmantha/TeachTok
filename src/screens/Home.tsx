import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Box} from '../theme/Theme';
import {HeaderButtonContainer} from '../components/molecules';
import Following from './Following';
import ForYou from './ForYou';
import {useTheme} from '../theme/Theme';

const Home = () => {
  const [isActiveFollowing, setIsActiveFollowing] = useState<boolean>(true);
  const theme = useTheme();
  const clickedSwitchButton = (newValue: boolean) => {
    setIsActiveFollowing(newValue);
  };

  return (
    <Box flex={1} zIndex={2}>
      <LinearGradient
        colors={[
          theme.colors.linearGradientTopRight,
          theme.colors.linearGradientTopLeft,
          theme.colors.linearGradientBottomLeft,
        ]}
        style={styles.linearGradient}>
        {isActiveFollowing ? <Following /> : <ForYou />}
        <HeaderButtonContainer isSetFollowing={clickedSwitchButton} />
      </LinearGradient>
    </Box>
  );
};

export default Home;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
