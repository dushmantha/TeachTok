import React, {useReducer, useRef} from 'react';
import {StyleSheet, Animated, TouchableOpacity, Dimensions} from 'react-native';
import {KnowledgeRateButtonContant} from '../atoms';
import {Box, Text, useTheme} from '../../theme/Theme';

// Define action types
const ActionTypes = {
  Expand: 'EXPAND',
  Collapse: 'COLLAPSE',
  SetButton: 'SET_BUTTON',
};

// Reducer function to handle state changes
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ActionTypes.Expand:
      return {...state, isExpanded: true};
    case ActionTypes.Collapse:
      return {...state, isExpanded: false};
    case ActionTypes.SetButton:
      return {
        ...state,
        expandeButtonColor: action.color,
        expandeButtonTitle: action.title,
      };
    default:
      return state;
  }
};

type KnowledgeRateContentProps = {
  onButtonClick: (buttonTitle: string) => void;
};

const KnowledgeRateContent = ({onButtonClick}: KnowledgeRateContentProps) => {
  const {width} = Dimensions.get('window');
  const expandedWidth = width * 0.6;
  const theme = useTheme();

  const initialState = {
    isExpanded: false,
    expandeButtonColor: '',
    expandeButtonTitle: '',
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const animatedWidth = useRef(new Animated.Value(100)).current;

  const clickedButton = (buttonColor: string, buttonTitle: string) => {
    dispatch({type: ActionTypes.Expand});
    dispatch({
      type: ActionTypes.SetButton,
      color: buttonColor,
      title: buttonTitle,
    });

    Animated.timing(animatedWidth, {
      toValue: expandedWidth,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const expandedButtonClicked = () => {
    onButtonClick(state.expandeButtonTitle);
    dispatch({type: ActionTypes.Collapse});
    dispatch({
      type: ActionTypes.SetButton,
      color: '',
      title: '',
    });
  };

  const buttonsData = [
    {color: theme.colors.rateButton1, text: '1'},
    {color: theme.colors.rateButton2, text: '2'},
    {color: theme.colors.rateButton3, text: '3'},
    {color: theme.colors.rateButton4, text: '4'},
    {color: theme.colors.rateButton5, text: '5'},
  ];

  return (
    <Box>
      {state.isExpanded ? (
        <TouchableOpacity onPress={expandedButtonClicked}>
          <Animated.View
            style={[
              styles.button,
              {width: expandedWidth, backgroundColor: state.expandeButtonColor},
            ]}>
            <Text variant="title3" color="text">
              {state.expandeButtonTitle}
            </Text>
          </Animated.View>
        </TouchableOpacity>
      ) : (
        <Box style={styles.container}>
          {buttonsData.map((button, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => clickedButton(button.color, button.text)}>
              <KnowledgeRateButtonContant
                key={index}
                color={button.color}
                text={button.text}
              />
            </TouchableOpacity>
          ))}
        </Box>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    height: 50,
    backgroundColor: 'gray',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
});

export default KnowledgeRateContent;
