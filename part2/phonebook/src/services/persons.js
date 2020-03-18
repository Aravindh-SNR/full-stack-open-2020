// Helper functions for communicating with the server using axios

import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

// Get all persons in the phonebook
const getAll = () => (
    axios
        .get(baseUrl)
        .then(response => response.data)
);

// Add a person to the phonebook
const create = (name, number) => (
    axios
        .post(baseUrl, {name, number})
        .then(response => response.data)
);

// Remove a person from the phonebook
// The callback is made to return status since data property is an empty object for axios delete method
const remove = id => (
    axios
        .delete(`${baseUrl}/${id}`)
        .then(response => response.status)
);

// Update phone number of an existing person
const update = (id, updatedPerson) => (
    axios
        .put(`${baseUrl}/${id}`, updatedPerson)
        .then(response => response.data)
);

export default {getAll, create, remove, update};