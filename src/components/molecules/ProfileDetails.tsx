import React from 'react';
import {Box, Text} from '../../theme/Theme';
import User from '../../api/types/User';

type ProfileDetailsProps = {
  user: User;
  description: string;
};

const ProfileDetails = ({user, description}: ProfileDetailsProps) => {
  return (
    <Box backgroundColor="transparent">
      <Text variant="title3" color="text">
        {user.name}
      </Text>
      <Text variant="body" color="text">
        {description}
      </Text>
    </Box>
  );
};

export default ProfileDetails;
