import React, {useEffect, useState} from 'react';
import {Box} from '../theme/Theme';
import {StyleSheet} from 'react-native';

import useFetchFollowingSection from '../api/hooks/useFetchFollowingSection';
import {followingUrl} from '../utils/constant';
import {EmptyView, ErrorView, Loader} from '../components/atoms';
import FollowingSection from '../api/types/FollowingSection';
import {
  CardFront,
  PlaylistBar,
  ProfileDetails,
  ButtonTitle,
} from '../components/molecules';
import {CardBack, FollowingIconsListContainer} from '../components/organisms';

const Following = () => {
  const [flashCard, setFlashCard] = useState<FollowingSection>();
  const [isClickedFlip, setIsClickedFlip] = useState(false);
  const [page, setPage] = useState(1);
  const {
    isLoadingFetchFollowingSection,
    dataFetchFollowingSection,
    errorFetchFollowingSection,
  } = useFetchFollowingSection(followingUrl, page);

  useEffect(() => {
    if (!isLoadingFetchFollowingSection && dataFetchFollowingSection) {
      // Merge new data with existing data when it's loaded
      setFlashCard(dataFetchFollowingSection);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, isLoadingFetchFollowingSection]);

  const handleEndReached = (buttonTitle: string) => {
    console.log(buttonTitle);
    if (!isLoadingFetchFollowingSection) {
      setIsClickedFlip(false);
      setPage(page + 1); // Load more data by incrementing the page
    }
  };
  const handleIconButtonClick = (buttonTitle: ButtonTitle) => {
    // Handle button click in the parent component

    switch (buttonTitle) {
      case ButtonTitle.like:
        return '';
      case ButtonTitle.flip:
        return setIsClickedFlip(!isClickedFlip);
      default:
        return '';
    }
  };

  return (
    <Box flex={1}>
      {isLoadingFetchFollowingSection && <Loader />}
      {errorFetchFollowingSection && <ErrorView />}
      {flashCard && flashCard !== undefined ? (
        <Box flex={1} style={styles.container}>
          <Box flexDirection="row" flex={4}>
            <Box style={styles.detailsContainer}>
              <Box justifyContent="space-around" flex={3}>
                {isClickedFlip ? (
                  <CardBack
                    flashcardFront={flashCard.flashcard_front}
                    flashcardBack={flashCard.flashcard_back}
                    onButtonClick={handleEndReached}
                  />
                ) : (
                  <CardFront flashcardFront={flashCard.flashcard_front} />
                )}
              </Box>
              <ProfileDetails
                user={flashCard.user}
                description={flashCard.description}
              />
            </Box>
            <Box flex={1} marginBottom="m">
              <FollowingIconsListContainer
                user={flashCard.user}
                onButtonClick={handleIconButtonClick}
              />
            </Box>
          </Box>
          <PlaylistBar playlist={flashCard.playlist} />
        </Box>
      ) : (
        <EmptyView />
      )}
    </Box>
  );
};

export default Following;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 90,
  },
  detailsContainer: {
    marginTop: 100,
    flex: 3,
    paddingStart: 24,
    paddingEnd: 8,
  },
});
