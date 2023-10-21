import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const goBackLink = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);

    fetchCountry(countryId)
      .then(setCountry)
      .finally(() => {
        setIsLoading(false);
      });
  }, [countryId]);
  return (
    <Section>
      <div
        style={{
          marginBottom: '60px',
          color: '#f2f2f2',
          letterSpacing: '0.06em',
          textDecoration: 'underline',

          borderColor: 'gray',
        }}
      >
        <Link to={goBackLink}>Back to Countries</Link>
      </div>
      <Container>{country && <CountryInfo {...country} />}</Container>
      {isLoading && <Loader />}
    </Section>
  );
};
