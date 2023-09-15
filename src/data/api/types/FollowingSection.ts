import User from './User';

type FollowingSection = {
  type: string;
  id: number;
  playlist: string;
  description: string;
  flashcard_front: string;
  flashcard_back: string;
  user: User;
};

export default FollowingSection;
