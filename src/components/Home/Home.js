import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountry] = useState([]);

    useEffect(() => {
       fetch('https://restcountries.eu/rest/v2/all')
       .then(res => res.json())
       .then(data => setCountry(data))

    }, [])
    return (
        <div>
            <h1>This Is Page : {countries.length}</h1>
            {
                countries.map(country => <Country country = {country}></Country>)
            }
        </div>
    );
};

export default Home;