import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FindCountry from './components/FindCountry';
import CountryList from './components/CountryList';

const App = () => {
  // List of all countries
  const [countries, setCountries] = useState([]);

  // Country to be found
  const [country, setCountry] = useState('');

  // Fetch countries from API
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data));
  }, []);

  return (
    <div>
      {
        countries.length ?
        <>
          <FindCountry country={country} setCountry={setCountry} />
          { country && <CountryList country={country} countries={countries} setCountry={setCountry} /> }
        </>
        :
        <p>Loading application...</p>
      }
    </div>
  );
};

export default App;