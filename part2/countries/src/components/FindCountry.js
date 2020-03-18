import React from 'react';

// Component with an input for finding countries

const FindCountry = ({country, setCountry}) => {
    return (
        <div>
            <label htmlFor='find-country'>Find countries: </label>
            <input id='find-country' value={country} autoFocus autoComplete='off'
                onChange={event => setCountry(event.target.value)}
            />
        </div>
    );
};

export default FindCountry;