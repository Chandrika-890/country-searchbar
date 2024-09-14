import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import CountryCard from './CountryCard';
import countryData from './data.json'; 
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the country data based on the search term
  const filteredCountries = countryData.filter(country =>
    country.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Country Search</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="results">
        {filteredCountries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default App;
