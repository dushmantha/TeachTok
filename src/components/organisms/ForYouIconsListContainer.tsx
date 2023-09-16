import React from 'react';
import SVGLike from '../../assets/like.svg';
import SVGComments from '../../assets/comments.svg';
import SVGBookmark from '../../assets/bookmark.svg';
import SVGShare from '../../assets/share.svg';
import {IconsListContainer, ButtonTitle} from '../molecules';
import User from '../../api/types/User';

const iconData = [
  {
    icon: <SVGLike width={40} height={40} color="white" />,
    text: '87',
    title: ButtonTitle.like,
  },
  {
    icon: <SVGComments width={40} height={40} color="white" />,
    text: '2',
    title: ButtonTitle.comments,
  },
  {
    icon: <SVGBookmark width={40} height={40} color="white" />,
    text: '203',
    title: ButtonTitle.bookmark,
  },
  {
    icon: <SVGShare width={40} height={40} color="white" />,
    text: '20',
    title: ButtonTitle.share,
  },
];

type ForYouIconsListContainerProps = {
  user: User;
  onButtonClick: (buttonTitle: ButtonTitle) => void;
};

const ForYouIconsListContainer = ({
  user,
  onButtonClick,
}: ForYouIconsListContainerProps) => {
  return (
    <IconsListContainer
      iconData={iconData}
      user={user}
      onButtonClick={onButtonClick}
    />
  );
};

export default ForYouIconsListContainer;
