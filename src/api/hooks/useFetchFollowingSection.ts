import axios from 'axios';
import {useState, useEffect} from 'react';
import FollowingSection from '../types/FollowingSection';

const useFetchFollowingSection = (url: string, pageNumber: number) => {
  const [isLoadingFetchFollowingSection, setIsLoadingFetchFollowingSection] =
    useState(false);
  const [errorFetchFollowingSection, setErrorFetchFollowingSection] =
    useState<any>(null);
  const [dataFetchFollowingSection, setDataFetchFollowingSection] =
    useState<FollowingSection | null>(null); // Initialize as null or an empty array

  useEffect(() => {
    if (!url) {
      return;
    }
    const fetchData = async () => {
      setIsLoadingFetchFollowingSection(true);
      try {
        const response = await axios.get(url); // Use Axios to make GET request
        const dataResponse = response.data;
        setDataFetchFollowingSection(dataResponse);
        setIsLoadingFetchFollowingSection(false);
      } catch (errorE) {
        setIsLoadingFetchFollowingSection(false);
        setErrorFetchFollowingSection(errorE);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);
  return {
    isLoadingFetchFollowingSection,
    dataFetchFollowingSection,
    errorFetchFollowingSection,
  };
};

export default useFetchFollowingSection;

const useFetchFollowingSectionMock = {
  type: 'flashcard',
  id: 1967,
  playlist: 'Period 5: 1844-1885',
  flashcard_front: "What was Congressman Abraham Lincoln's Spot Resolution?",
  flashcard_back:
    'Progression of major events:\n- 1845: John Slidell sent to Mexico to buy California for $25 million, Mexico refused\n- 1846: General Zachary Taylor went to the disputed border at the Rio Grande with US troops\n- When American troops were attacked by Mexican troops, President Polk calls Congress for approval to start a war\n- Spot Resolution: Lincoln opposed the war and asked for proof that the troops were attacked on American soil\n- Battle of Buena Vista: American General Zachary Taylor gets victory in northern Mexico against Mexican General Santa Anna\n- General Winfield Scott sails to Veracruz and takes over the capital, Mexico City',
  description: 'Topic 5.3: The Mexican–American War #apush',
  user: {
    name: 'AP US History',
    avatar: 'https://cross-platform-rwa.rp.devfactory.com/avatars/apush.png',
  },
};

export {useFetchFollowingSectionMock};
