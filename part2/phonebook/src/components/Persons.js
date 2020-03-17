import React from 'react';

// Component for displaying all the persons in the phonebook

const Persons = ({persons, searchName}) => {
    return (
        <ul style={{listStyle: 'none'}}>
            {
                persons.filter(person => person.name.toLowerCase().includes(searchName))
                .map(person => <li key={person.name}>{person.name} {person.number}</li>)
            }
        </ul>
    )
}

export default Persons;
