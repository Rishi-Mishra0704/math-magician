import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: {
            'X-Api-Key': 'VXGZN0G8q2S3XyhgcMpqFQ==Xo6ioObfdUcoTLQT',
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        if (isMounted) {
          setQuote(data[0].quote);
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchQuote();
  }, [isMounted]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to fetch quote.</div>;
  }

  return (
    <div>
      <p>{!isLoading && !isError && quote}</p>
    </div>
  );
};

export default Quote;
