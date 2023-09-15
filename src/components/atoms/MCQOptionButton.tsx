import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {useTheme} from '../../theme/Theme';

interface MCQOptionProps {
  text: string;
  isCorrect: boolean | undefined;
  isSelected: boolean;
  onPress: () => void;
}

const MCQOptionButton: React.FC<MCQOptionProps> = ({
  text,
  isCorrect = false,
  isSelected,
  onPress,
}) => {
  const theme = useTheme();
  const buttonStyle = {
    ...styles.button,
    backgroundColor: isSelected
      ? isCorrect
        ? theme.colors.buttonCorrect
        : theme.colors.buttonWrong
      : theme.colors.buttonBackBackground,
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text
        style={[styles.buttonText, {textShadowOffset: {width: 1, height: 1}}]}>
        {text}
      </Text>
      {isSelected &&
        (isCorrect ? (
          <Image
            source={require('../../assets/correct.gif')}
            style={styles.imageCorrect}
          />
        ) : (
          <Image
            source={require('../../assets/wrong.gif')}
            style={styles.imageWrong}
          />
        ))}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    paddingTop: 8,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: -2,
    flex: 1,
  },
  imageCorrect: {
    height: 60,
    flex: 0.2,
    width: 60,
    transform: [{scaleX: -1}],
  },
  imageWrong: {
    height: 60,
    marginTop: 20,
    flex: 0.2,
    width: 60,
    transform: [{rotate: '180deg'}],
  },
});

export default MCQOptionButton;
