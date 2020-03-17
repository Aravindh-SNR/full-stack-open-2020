import React from 'react';

const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </div>
    );
};

// Subcomponent to display name of course
const Header = ({name}) => <h2>{name}</h2>;

// Subcomponent to display information about each part and total number of exercises in a course
const Content = ({parts}) => {

    // Total number of exercises
    const total = parts.reduce((sum, currentPart) => sum + currentPart.exercises, 0);

    return (
        <div>
            {parts.map(part => <Part part={part} key={part.id} />)}
            <p><strong>total of {total} exercises</strong></p>
        </div>
    );
};

// Subcomponent to display name of the part and the number of exercises in it
const Part = ({part}) => <p>{part.name} {part.exercises}</p>;

export default Course;