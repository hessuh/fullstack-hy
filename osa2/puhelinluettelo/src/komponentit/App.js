import React from 'react';
import Person from './Person';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {
                    name: 'Arto Hellas',
                    number: '12345678'
                }
            ],
            newName: '',
            newNumber: ''
        }
    }

    handleNumberChange = (event) => {
        this.setState({newNumber: event.target.value})
    };

    handleNameChange = (event) => {
        this.setState({newName: event.target.value})
    };

    addPerson = (event) => {
        event.preventDefault();
        if (this.isNameInList(this.state.newName)) return;
        const new_persons = this.state.persons;
        new_persons.push({
            name: this.state.newName,
            number: this.state.newNumber
        });
        this.setState({persons: new_persons})
    };

    isNameInList = (name) => this.state.persons.some(person => person.name === name)

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.addPerson}>
                    <div>
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
                <h2>Numerot</h2>
                {this.state.persons.map(person => <Person person={person} key={person.name}/>)}
            </div>
        )
    }
}

export default App