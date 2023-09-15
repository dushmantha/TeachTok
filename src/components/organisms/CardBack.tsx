import React from 'react';
import {Box, Text} from '../../theme/Theme';
import {KnowledgeRateContent} from '../molecules';
import {ScrollView} from 'react-native';

type CardBackProps = {
  flashcardFront: string;
  flashcardBack: string;
  onButtonClick: (buttonTitle: string) => void;
};

const CardBack = ({
  flashcardFront,
  flashcardBack,
  onButtonClick,
}: CardBackProps) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box
        backgroundColor="transparent"
        justifyContent="space-around"
        marginVertical="xl">
        <Text variant="title3" color="text">
          {flashcardFront}
        </Text>
        <Box height={2} backgroundColor="textDisabled" marginVertical="xl" />
        <Box>
          <Text variant="body" color="answer">
            Answer
          </Text>
          <Text variant="title3" color="textDisabled">
            {flashcardBack}
          </Text>
        </Box>
        <Box marginVertical="xl">
          <Text variant="body" color="answer">
            How well did you know this?
          </Text>
          <KnowledgeRateContent onButtonClick={onButtonClick} />
        </Box>
      </Box>
    </ScrollView>
  );
};

export default CardBack;
