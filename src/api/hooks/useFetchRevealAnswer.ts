import axios from 'axios';
import {useRef, useState, useEffect} from 'react';
import RevealAnswer from '../types/RevealAnswer';

const useFetchRevealAnswer = (url: string) => {
  const cache = useRef<any>({});
  const [isLoadingRevealAnswer, setIsLoadingRevealAnswer] = useState(false);
  const [errorRevealAnswer, setErrorRevealAnswer] = useState<any>(null);
  const [dataRevealAnswer, setDataRevealAnswer] = useState<RevealAnswer | null>(
    null,
  );

  useEffect(() => {
    if (!url) {
      return;
    }
    const fetchData = async () => {
      setIsLoadingRevealAnswer(true);
      if (cache.current[url]) {
        const dataResponse = cache.current[url];
        setDataRevealAnswer(dataResponse);
        setIsLoadingRevealAnswer(false);
      } else {
        try {
          const response = await axios.get(url); // Use Axios to make GET request
          const dataResponse = response.data;
          cache.current[url] = dataResponse;
          setDataRevealAnswer(dataResponse);
          setIsLoadingRevealAnswer(false);
        } catch (errorE) {
          setIsLoadingRevealAnswer(false);
          setErrorRevealAnswer(errorE);
        }
      }
    };
    fetchData();
  }, [url]);
  return {isLoadingRevealAnswer, dataRevealAnswer, errorRevealAnswer};
};

export default useFetchRevealAnswer;
