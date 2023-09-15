import React from 'react';
import {StyleSheet} from 'react-native';
import {Box} from '../../theme/Theme';
import SVGLike from '../../assets/like.svg';
import SVGComments from '../../assets/comments.svg';
import SVGBookmark from '../../assets/bookmark.svg';
import SVGShare from '../../assets/share.svg';
import SVGFlip from '../../assets/flip.svg';
import {IconsListContainer, ButtonTitle} from '../molecules';
import User from '../../data/api/types/User';

const styles = StyleSheet.create({
  circle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#28B18F',
    justifyContent: 'center',
  },
});

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
  {
    icon: (
      <Box style={styles.circle}>
        <SVGFlip width={30} height={30} color="white" />
      </Box>
    ),
    text: 'Flip',
    title: ButtonTitle.flip,
  },
];

type FollowingIconsListContainerProps = {
  user: User;
  onButtonClick: (buttonTitle: ButtonTitle) => void;
};

const FollowingIconsListContainer = ({
  user,
  onButtonClick,
}: FollowingIconsListContainerProps) => {
  return (
    <IconsListContainer
      iconData={iconData}
      user={user}
      onButtonClick={onButtonClick}
    />
  );
};

export default FollowingIconsListContainer;
