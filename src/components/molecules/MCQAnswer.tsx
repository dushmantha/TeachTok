import React, {useState} from 'react';
import MCQOptionButton from '../atoms/MCQOptionButton';
import {Box} from '../../theme/Theme';
import MCQSection from '../../api/types/MCQSection';

type MCQAnswerProps = {
  mcq: MCQSection;
};

const MCQAnswer = ({mcq}: MCQAnswerProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionPress = (optionIndex: number) => {
    if (selectedOption === null) {
      setSelectedOption(optionIndex);
    }
  };

  return (
    <Box>
      {mcq.foryou.options.map((option, index) => (
        <MCQOptionButton
          key={index}
          isCorrect={mcq.answer.correct_options.some(
            item => item.id === option.id,
          )}
          text={option.answer}
          isSelected={selectedOption === index}
          onPress={() => handleOptionPress(index)}
        />
      ))}
    </Box>
  );
};

export default MCQAnswer;
