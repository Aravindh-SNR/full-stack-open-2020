import React from 'react';

// Component for filtering the phonebook by the searched name

const Filter = ({searchName, setSearchName}) => {
    return (
        <div>
            Search for name: <input value={searchName} 
                onChange={event => setSearchName(event.target.value)}
            />
        </div>
    );
};

export default Filter;
