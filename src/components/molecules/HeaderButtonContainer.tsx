import React, {useState, useRef, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, Animated} from 'react-native';
import {Box, Text, useTheme} from '../../theme/Theme';
import {IconWithText} from '../atoms';
import SVGTimer from '../../assets/timer.svg';
import SVGSearch from '../../assets/search.svg';

type HeaderButtonContainerProps = {
  isSetFollowing: (newValue: boolean) => void;
  timeOut?: (newValue: boolean) => void;
};

const HeaderButtonContainer = ({
  isSetFollowing,
}: HeaderButtonContainerProps) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the seconds
      setSeconds(prevSeconds => prevSeconds + 1);

      // Check if seconds reach 60 and reset them to 0
      if (seconds === 59) {
        setSeconds(0);

        // Increment the minutes
        setMinutes(prevMinutes => prevMinutes + 1);

        // Check if minutes reach 60 and reset them to 0
        if (minutes === 59) {
          setMinutes(0);

          // Increment the hours
          setHours(prevHours => prevHours + 1);
        }
      }
    }, 1000);
    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, [seconds, minutes, hours]);

  // Format the remaining time as "mm:ss"
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const theme = useTheme();
  const [activeButton, setActiveButton] = useState<number>(0);
  const underlinePosition = useRef(new Animated.Value(0)).current;

  const handleButtonPress = (index: number) => {
    setActiveButton(index);
    isSetFollowing(index === 0 ? true : false);

    Animated.spring(underlinePosition, {
      toValue: index,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Box style={styles.container} zIndex={3}>
      <Box flexDirection="row">
        <IconWithText
          children={<SVGTimer width={25} height={25} color="white" />}
          isAlignItemsHorizontaly={true}
          text={formattedTime}
        />
      </Box>
      <Box alignItems="center">
        <Box>
          <Box flexDirection="row">
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress(0)}>
              <Text
                variant="body"
                style={[
                  {
                    color:
                      activeButton === 0
                        ? theme.colors.text
                        : theme.colors.textDisabled,
                  },
                  [styles.buttonText],
                ]}>
                Following
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress(1)}>
              <Text
                variant="body"
                style={[
                  {
                    color:
                      activeButton === 1
                        ? theme.colors.text
                        : theme.colors.textDisabled,
                  },
                  [styles.buttonText],
                ]}>
                For You
              </Text>
            </TouchableOpacity>
          </Box>
          <Animated.View
            style={[
              styles.underline,
              {
                transform: [
                  {
                    translateX: underlinePosition.interpolate({
                      inputRange: [0, 1],
                      outputRange: [24, 112], // Adjust the width of the underline here
                    }),
                  },
                ],
              },
            ]}
          />
        </Box>
      </Box>
      <Box flexDirection="row">
        <IconWithText
          children={<SVGSearch width={25} height={25} color="white" />}
          isAlignItemsHorizontaly={true}
        />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    marginTop: 60,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  underline: {
    alignSelf: 'flex-start',
    height: 4,
    width: 50,
    backgroundColor: 'white',
  },
});

export default HeaderButtonContainer;
