import React from 'react';

import Persons from './Persons'
import personService from '../services/persons'
import Notification from './Notification'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
            notification: null,
            filter: ''
        }
    }

    componentWillMount() {
        personService
            .getAll()
            .then(persons => {
                this.setState({persons: persons})
            })
    }

    handleNumberChange = (event) => {
        this.setState({newNumber: event.target.value})
    };

    handleNameChange = (event) => {
        this.setState({newName: event.target.value})
    };

    handleFilterChange = (event) => {
        this.setState({filter: event.target.value})
    };

    delPerson = (person) => () => {
        personService.del(person);
        const new_persons = this.state.persons;
        new_persons.splice(new_persons.indexOf(person), 1)
        this.setState({
            notification: `poistettiin ${person.name}`,
            persons: new_persons
        })
        setTimeout(() => {
            this.setState({ notification: null })
        }, 5000)
    };

    addPerson = (event) => {
        event.preventDefault();

        if (!this.isNameInList(this.state.newName)) {
            personService
                .create(
                    {
                        name: this.state.newName,
                        number: this.state.newNumber
                    })
                .then((new_person) => {
                    const new_persons = this.state.persons
                    new_persons.push(new_person);
                    this.setState({
                        notification: `lisättiin ${new_person.name}`,
                        persons: new_persons
                    })
                })
                setTimeout(() => {
                    this.setState({ notification: null })
                }, 5000)
        } else {
            const person = this.state.persons.filter(
                person => person.name.toUpperCase() === this.state.newName.toUpperCase()
            )[0];
            const new_person = Object.assign(
                person,
                {number: this.state.newNumber}
            );
            personService
                .update(new_person.id, new_person)
                .catch(error => {
                    personService.create(new_person)
                });
            const persons = this.state.persons.filter(
                person => person.id !== new_person.id
            ).concat(new_person);
            this.setState({
                notification: `muutettiin ${new_person.name}`,
                persons: persons
            })
            setTimeout(() => {
                this.setState({ notification: null })
            }, 5000)
        }
    };

    isNameInList = (name) => this.state.persons.some(person => person.name === name)

    render() {
        return (
            <div>
                <Notification message={this.state.notification} />
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.addPerson}>
                    <div>
                        <div>
                            <h2>Rajaa näytettäviä:</h2>
                            <input
                                value={this.state.filter}
                                onChange={this.handleFilterChange}
                            />
                        </div>
                        <h2>Lisää uusi</h2>
                        <div>
                            nimi:
                            <input
                                value={this.state.newName}
                                onChange={this.handleNameChange}
                            />

                        </div>
                        <div>
                            puhelinnumero:
                            <input
                                value={this.state.newNumber}
                                onChange={this.handleNumberChange}
                            />

                        </div>
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <Persons persons={this.state.persons} filter={this.state.filter} delperson={this.delPerson}/>
            </div>
        )
    }
}

export default App