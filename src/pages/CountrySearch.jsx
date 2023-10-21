import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) {
      return;
    }
    fetchByRegion(region).then(setCountries);
  }, [searchParams]);

  const onSubmit = region => {
    setSearchParams({ region });
  };

  return (
    <Section>
      <Container>
        <h2>CountrySearch</h2>
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
