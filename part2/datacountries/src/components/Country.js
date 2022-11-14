import { useEffect, useState } from "react";
import axios from 'axios';

const Country = ({country}) => {

    const [weather, setWeather] = useState();

    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY;
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&units=metric&appid=${api_key}`)
          .then(response => {
            setWeather(response.data);
          })
      }, [country]);

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital[0]} <br/>
            Area: {country.area}</p>
            <h2>Languages:</h2>
            <ul>
                {Object.keys(country.languages).map((language) => <li key={language}>{country.languages[language]}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.name.common + " flag"}/>
            {weather &&
            <div>
                <h2>Weather in {country.capital[0]}</h2>
                <p>Temperature: {weather.main.feels_like} Celcius</p>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                <p>Wind: {weather.wind.speed} m/s</p>
            </div>
            }
            

        </div>
    );

}

export default Country;