import {useState, useEffect} from 'react';
import axios from 'axios'; // Import Axios
import MCQSection from '../types/MCQSection';
import {answerUrl} from '../../../utils/Constant';

const useFetchForyouSection = (url: string, pageNumber: number) => {
  const [isLoadingFetchForyouSection, setIsLoadingFetchForyouSection] =
    useState(false);
  const [errorFetchForyouSection, setErrorFetchForyouSection] =
    useState<any>(null);
  const [dataFetchForyouSection, setDataFetchForyouSection] =
    useState<MCQSection | null>(null);

  useEffect(() => {
    if (!url) {
      return;
    }
    const fetchData = async () => {
      setIsLoadingFetchForyouSection(true);
      try {
        const foryouResponse = await axios.get(url); // Use Axios to make GET request
        const dataForyouResponse = foryouResponse.data;
        const revealAnswerResponse = await axios.get(
          `${answerUrl}${dataForyouResponse.id}`,
        ); // Use Axios to make GET request
        const dataRevealAnswerResponse = revealAnswerResponse.data;
        setDataFetchForyouSection({
          foryou: dataForyouResponse,
          answer: dataRevealAnswerResponse,
        });
        setIsLoadingFetchForyouSection(false);
      } catch (errorE) {
        setIsLoadingFetchForyouSection(false);
        setErrorFetchForyouSection(errorE);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  return {
    isLoadingFetchForyouSection,
    dataFetchForyouSection,
    errorFetchForyouSection,
  };
};

export default useFetchForyouSection;

const mockForyouSection = [
  {
    type: 'mcq',
    id: 2979,
    playlist: 'Period 6: 1865-1898',
    description: '5.5 Sectional Conflict: Regional Differences #apush',
    question:
      "What were the two largest immigrant groups during the mid-1800's?",
    image:
      'https://cross-platform-rwa.rp.devfactory.com/images/2979%20-%20german%20and%20irish%20immigrant%20groups.png',
    options: [
      {id: 'A', answer: 'German & Irish'},
      {id: 'B', answer: 'Italian & German'},
      {id: 'C', answer: 'Chinese & Japanese'},
    ],
    user: {
      name: 'AP US History',
      avatar: 'https://cross-platform-rwa.rp.devfactory.com/avatars/apush.png',
    },
  },
];
export {mockForyouSection};
