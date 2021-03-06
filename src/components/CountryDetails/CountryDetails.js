import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const {countryName} = useParams()
    const [country, setCountry] = useState([])
    const {name, capital, population, region, area} = country
    console.log(country.name);
    useEffect(()=> {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, [])
    return (
        <div>
            <h1>Here Is Country Details:</h1>
            <h2>Name: {name}</h2>
            <h2>Capital: {capital}</h2>
            <h2>Population: {population}</h2>
            <h3>Region: {region}</h3>
            <h3>Area:{area}</h3>
        </div>
    );
};

export default CountryDetails;