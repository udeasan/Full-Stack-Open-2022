import Country from "./Country";

const Countries = ({ countries, countryFilter, oneCountry, setOneCountry }) => {

    const handleShowCountry = (country) => {
        setOneCountry(country);
    }

    const countriesToshow = countries.length > 0 && countryFilter !== ""
        ? countries.filter(country => country.name.common.toLowerCase().includes(countryFilter.toLowerCase()))
        : [];

    if (oneCountry !== "") {
        return <Country country={countriesToshow.find(country => country.name.common === oneCountry)} />;
    }
    else if (countriesToshow.length > 10) {
        return (
            <div>
                Too many matches, please specify another filter.
            </div>
        );
    }
    else if (countriesToshow.length > 1) {
        return (
            <div>
                <ul>
                    {countriesToshow.map(country => {
                        return (
                        <li key={country.name.common}>{country.name.common}
                            <button onClick={() => handleShowCountry(country.name.common)} >Show</button>
                        </li>
                        );
                    })}
                </ul>
            </div>
        );
    } else if (countriesToshow.length === 1) {
        return <Country country={countriesToshow[0]} />;
    }

}

export default Countries;