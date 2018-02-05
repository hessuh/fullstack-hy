import React from 'react';

const Person = ({person, delperson}) => {
    return (
        <div>{person.name}
            {person.number}
            <button onClick={delperson(person)}>
                poista
            </button>
        </div>
    )
};

export default Person;