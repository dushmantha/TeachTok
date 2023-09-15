type CorrectOptions = {
  id: string;
  answer: string;
};

type RevealAnswer = {
  id: number;
  correct_options: [CorrectOptions];
};

export default RevealAnswer;
