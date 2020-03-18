import React, { useState, useRef, useEffect } from 'react';
import personService from './services/persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
import './index.css';

const App = () => {
  const [ persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ searchName, setSearchName ] = useState('');
  
  // Notification message and its type
  const [ message, setMessage ] = useState(null);
  const [ type, setType ] = useState('');

  const focusName = useRef();

  // Fetch persons array from json-server once the component is rendered for the first time
  useEffect(() => {
    personService
      .getAll()
      .then(setPersons);
  }, []);

  // Function to add a person to the phonebook
  const addPerson = event => {
    event.preventDefault();

    const existingPerson = persons.find(person => person.name === newName);

    // Update person if newName already exists, otherwise add new person
    if (existingPerson) {
      window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`) &&
      personService
        .update(existingPerson.id, {...existingPerson, number: newNumber})
        .then(updatedPerson => {
          setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person));
          
          // Set notification message to be displayed
          setMessage(`Updated ${newName}'s number`);
          setType('info');

          // Clear input data
          setNewName('');
          setNewNumber('');
        })
        .catch(() => {
          // When a user tries to update an already deleted person

          setMessage(`Information of ${newName} has already been deleted`);
          setType('error');
          setPersons(persons.filter(person => person.id !== existingPerson.id));
        });
    } else {
      personService
        .create(newName, newNumber)
        .then(newPerson => {
          setPersons(persons.concat(newPerson));

          // Set notification message to be displayed
          setMessage(`Added ${newName}`);
          setType('info');

          // Clear input data
          setNewName('');
          setNewNumber('');
        });
    }

    // Place focus back on name input
    focusName.current.focus();
  };

  // Function to delete a person from the phonebook
  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
          setMessage(`Deleted ${name}`);
          setType('info');
        });
    } 
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={type} setMessage={setMessage} setType={setType} />
      <Filter searchName={searchName} setSearchName={setSearchName} />

      <h3>Add a new</h3>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}
        addPerson={addPerson} focusName={focusName}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} searchName={searchName} deletePerson={deletePerson} />
    </div>
  );
};

export default App;