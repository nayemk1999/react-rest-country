import React from 'react';
import { NavLink } from 'react-router-dom';

const Country = (props) => {
    const {name} = props.country

    const countryStyle = {
        border : '2px solid purple',
        borderRadius : '10px',
        width : '300px',
        margin : '20px',
        padding : '20px'
    }
    return (
        <div style ={countryStyle}>
           <h1>Name : {name}</h1>
           <NavLink to = {`/country/${name}`}>Show Country Details</NavLink>
        </div>
    );
};

export default Country;