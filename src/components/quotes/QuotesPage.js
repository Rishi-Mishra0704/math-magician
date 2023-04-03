import React, { useState, useEffect } from 'react';
import classes from '../css/Quotes.module.css';

const QuotesPage = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
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
          setAuthor(data[0].author);
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchQuote();
  }, [isMounted]);

  return (
    <div className={classes.container}>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Failed to fetch quote.</div>}
      {!isLoading && !isError && (
        <div>
          <p>
            &#34;
            {quote}
            &#34; ~
            {author}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuotesPage;
