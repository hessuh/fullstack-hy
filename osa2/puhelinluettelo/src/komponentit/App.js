import React from 'react';

import Persons from './Persons'
import personService from '../services/persons'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
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

    addPerson = (event) => {
        event.preventDefault();
        if (this.isNameInList(this.state.newName)) return;
        personService
            .create(
                {
                    name: this.state.newName,
                    number: this.state.newNumber
                })
            .then((created) => {
                const new_persons = this.state.persons
                new_persons.push(created)
                this.setState({
                    persons: new_persons
                })
            })
    };

    isNameInList = (name) => this.state.persons.some(person => person.name === name)

    render() {
        return (
            <div>
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
                <Persons persons={this.state.persons} filter={this.state.filter}/>
            </div>
        )
    }
}

export default App