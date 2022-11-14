import { useState, useEffect } from 'react'
import axios from 'axios';
import Filter from './components/Filter';
import Countries from './components/Countries';

function App() {

  const [countries, setCountries] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');
  const [oneCountry, setOneCountry] = useState('');

  const handleFilterChange = (event) => {
    setCountryFilter(event.target.value);
  }

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data);
      })
  }, []);

  return (
    <div>
      {oneCountry === "" 
      ? <Filter countryFilter={countryFilter} handleFilter={handleFilterChange}/>
      : <button onClick={() => setOneCountry('')}>Back</button>}
      
      <Countries countries={countries} countryFilter={countryFilter} oneCountry={oneCountry} setOneCountry={setOneCountry} />
    </div>
  );
}

export default App;
