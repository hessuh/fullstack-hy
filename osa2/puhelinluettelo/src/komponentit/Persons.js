import React from 'react';
import Person from './Person';

const filterWithName = (persons, filter) =>
    persons.filter(person =>
        person.name.toUpperCase().includes(filter.toUpperCase()));

const Persons = ({persons, filter, delperson}) => {
    return (
        <div>
            <h2>Numerot</h2>
            <table>
                <tr>
                {filterWithName(persons, filter).map(
                    person => <Person person={person} key={person.name} delperson={delperson} />
                )}
                </tr>
            </table>
        </div>
    )
};

export default Persons;