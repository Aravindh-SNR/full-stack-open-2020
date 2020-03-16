import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = ({anecdotes}) => {
    // Store selected anecdote
    const [selected, setSelected] = useState(0);

    // Store votes in an initially zero-filled array of length equal to the number of anecdotes
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
    
    // Function to store votes
    const registerVote = () => {
        const newVotes = [...votes];
        newVotes[selected]++;
        setVotes(newVotes);
    };

    // Function to select a random anecdote
    const selectRandomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));

    // Function that returns the index of the anecdote with the most number of votes
    const findWinner = () => votes.indexOf(Math.max(...votes));

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <button onClick={registerVote}>Vote</button>
            <button onClick={selectRandomAnecdote}>Next Anecdote</button>

            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[findWinner()]}</p>
            <p>has {votes[findWinner()]} votes</p>
        </div>
    );
};

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
);