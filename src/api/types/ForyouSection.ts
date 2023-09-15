import User from './User';

type Options = {
  id: string;
  answer: string;
};

type ForyouSection = {
  type: string;
  id: number;
  playlist: string;
  description: string;
  question: string;
  image: string;
  options: Options[];
  user: User;
};

export type {ForyouSection, Options};
