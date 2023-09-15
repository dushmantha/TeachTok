import React from 'react';
import {Box} from '../../theme/Theme';
import {IconWithText} from '../atoms';
import User from '../../data/api/types/User';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';

interface IconData {
  icon: React.ReactNode;
  text?: string;
  title: ButtonTitle;
}

interface ForYouIconsListContainerProps {
  iconData: IconData[];
  user: User;
  onButtonClick: (buttonTitle: ButtonTitle) => void;
}

export enum ButtonTitle {
  like,
  comments,
  share,
  bookmark,
  flip,
  profile,
}

const IconsListContainer: React.FC<ForYouIconsListContainerProps> = ({
  iconData,
  user,
  onButtonClick,
}) => {
  const handleButtonClick = (buttonTitle: ButtonTitle) => {
    onButtonClick(buttonTitle); // Return information to the parent
  };
  return (
    <Box flex={1} justifyContent="flex-end" alignItems="center">
      {user &&
        user !== undefined &&
        user.avatar &&
        user.avatar !== undefined && (
          <Image
            style={styles.profileImage}
            source={{
              uri: user.avatar,
            }}
          />
        )}
      {iconData.map((item, index) => (
        <TouchableOpacity
          onPress={() => handleButtonClick(item.title)}
          key={index}>
          <IconWithText isAlignItemsHorizontaly={false} text={item.text}>
            {item.icon}
          </IconWithText>
        </TouchableOpacity>
      ))}
    </Box>
  );
};

export default IconsListContainer;

const styles = StyleSheet.create({
  profileImage: {
    width: 50,
    height: 50,
    marginVertical: 20,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 25,
  },
});
