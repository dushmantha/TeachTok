import React, {useEffect, useState} from 'react';
import {Dimensions, ImageBackground, Platform, StyleSheet} from 'react-native';
import {Box, Text} from '../theme/Theme';
import Carousel from 'react-native-reanimated-carousel';
import {ForYouIconsListContainer} from '../components/organisms';
import {
  PlaylistBar,
  MCQAnswer,
  ProfileDetails,
  ButtonTitle,
} from '../components/molecules';
import useFetchForyouSection from '../api/hooks/useFetchForyouSection';
import {forYouUtl} from '../utils/constant';
import {EmptyView, ErrorView, Loader} from '../components/atoms/';
import MCQSection from '../api/types/MCQSection';

const NO_WIDTH_SPACE = '';
type MCQType = {
  item: MCQSection;
  index: number;
};

const ForYou = () => {
  const [allData, setAllData] = useState<MCQSection[]>([]);
  const [page, setPage] = useState(1);
  const {
    isLoadingFetchForyouSection,
    dataFetchForyouSection,
    errorFetchForyouSection,
  } = useFetchForyouSection(forYouUtl, page);

  const {width: wWidth, height: hHeight} = Dimensions.get('window');

  const highlight = (string: string): JSX.Element[] =>
    string.split(' ').map((word, i) => (
      <Text key={i} variant="title3">
        <Text style={styles.highlighted} variant="title3">
          {word}{' '}
        </Text>
        {NO_WIDTH_SPACE}
      </Text>
    ));

  useEffect(() => {
    if (!isLoadingFetchForyouSection && dataFetchForyouSection) {
      // Merge new data with existing data when it's loaded
      setAllData([...allData, ...[dataFetchForyouSection]]);
      if (page === 1 || page === 2 || page === 3) {
        setPage(page + 1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, isLoadingFetchForyouSection]);

  const handleEndReached = () => {
    if (!isLoadingFetchForyouSection) {
      setPage(page + 1); // Load more data by incrementing the page
    }
  };

  const handleIconButtonClick = (buttonTitle: ButtonTitle) => {
    // Handle button click in the parent component

    switch (buttonTitle) {
      case ButtonTitle.like:
        return '';
      case ButtonTitle.comments:
        return '';
      default:
        return '';
    }
  };

  const renderItem = ({item, index}: MCQType) => {
    return (
      <ImageBackground
        key={index}
        source={{
          uri: item.foryou.image,
          cache: 'force-cache',
        }}
        style={styles.backgroundImage}>
          <Box flexDirection="row" flex={4}>
            <Box style={styles.detailsContainer}>
              <Box justifyContent="space-around" flex={3}>
                <Text variant="title3">{highlight(item.foryou.question)}</Text>
                <MCQAnswer mcq={item} />
              </Box>
              <ProfileDetails
                user={item.foryou.user}
                description={item.foryou.description}
              />
            </Box>
            <Box flex={1} marginBottom="m">
              <ForYouIconsListContainer
                user={item.foryou.user}
                onButtonClick={handleIconButtonClick}
              />
            </Box>
          </Box>
          <PlaylistBar playlist={item.foryou.playlist} />
      </ImageBackground>
    );
  };

  return (
    <Box flex={1}>
      {isLoadingFetchForyouSection && <Loader />}
      {errorFetchForyouSection && <ErrorView />}
      {allData &&
      allData !== undefined &&
      (allData.length !== 0 || allData.length !== 0) ? (
        <Carousel
          loop={false}
          vertical={true}
          style={styles.carouselContainer}
          height={hHeight}
          width={wWidth}
          data={allData}
          renderItem={renderItem}
          onScrollEnd={handleEndReached}
        />
      ) : (
        <EmptyView />
      )}
    </Box>
  );
};

export default ForYou;

const styles = StyleSheet.create({
  carouselContainer: {
    top: 0,
  },
  backgroundImage: {
    flex: 1,
    paddingBottom: Platform.OS === "android" ? 110 : 90,
  },
  detailsContainer: {
    marginTop: 90,
    padding: 24,
    flex: 3,
  },
  highlighted: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 5,
    marginHorizontal: 16,
    textAlign: 'left',
  },
});
