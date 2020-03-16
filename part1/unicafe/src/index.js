import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Component to display a button
const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>;

// Component to display a single stat
const Statistic = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    );
};

// Component to display all the stats
const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad;

    return (
        <div>
            {
                total ?
                <table>
                    <tbody>
                        <Statistic text='Good' value={good} />
                        <Statistic text='Neutral' value={neutral} />
                        <Statistic text='Bad' value={bad} />
                        <Statistic text='All' value={total} />
                        <Statistic text='Average' value={(good - bad) / total} />
                        <Statistic text='Positive' value={`${(good / total) * 100} %`} />
                    </tbody>
                </table>
                :
                <p>No feedback given.</p>
            }
        </div>
    );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text='Good' handleClick={() => setGood(good + 1)} />
      <Button text='Neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='Bad' handleClick={() => setBad(bad + 1)} />
      
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, 
  document.getElementById('root')
);