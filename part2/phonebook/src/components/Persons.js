import React from 'react';

// Component for displaying all the persons in the phonebook

const Persons = ({persons, searchName}) => {
    return (
        persons.length ?
        <ul style={{listStyle: 'none', padding: 0}}>
            {
                persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
                .map(person => <li key={person.name}>{person.name} {person.number}</li>)
            }
        </ul>
        :
        <p>Loading...</p>
    );
};

export default Persons;
