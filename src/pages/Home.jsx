import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then(data => {
      setCountries(data);
    });
  }, []);

  return (
    <Section>
      <Container>
        <h2>Home</h2>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
