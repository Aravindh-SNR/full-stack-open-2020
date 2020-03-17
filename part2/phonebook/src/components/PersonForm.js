import React from 'react';

// Component for adding a new person to the phonebook

const PersonForm = ({newName, setNewName, newNumber, setNewNumber, addPerson, focusName}) => {
    return (
        <form onSubmit={addPerson}>
            <div>
                Name: <input value={newName} onChange={event => setNewName(event.target.value)} 
                    required autoComplete='off' ref={focusName}
                />
            </div>
            <div>
                Number: <input value={newNumber} onChange={event => setNewNumber(event.target.value)} 
                    required autoComplete='off'
                />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    );
};

export default PersonForm;
