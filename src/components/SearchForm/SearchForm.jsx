import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [region, setRegion] = useState('');
  function handlyChange(e) {
    setRegion(e.target.value);
  }

  const handlySubmit = e => {
    e.preventDefault();
    if (!region) {
      alert('select any region');
      return;
    }
    onSubmit(region);
  };
  return (
    <SearchFormStyled onSubmit={handlySubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        onChange={handlyChange}
        aria-label="select"
        name="region"
        required
        defaultValue="default"
      >
        <option disabled value="default">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
