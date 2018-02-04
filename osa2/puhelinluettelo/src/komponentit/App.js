import React from 'react';
import Name from './Name';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {name: 'Arto Hellas'}
            ],
            newName: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({newName: event.target.value})
    };

    addPerson = (event) => {
        event.preventDefault();
        const new_persons = this.state.persons;
        new_persons.push({name: this.state.newName});
        this.setState({persons: new_persons})
    };

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.addPerson}>
                    <div>
                        nimi:
                        <input
                            value={this.state.newName}
                            onChange={this.handleNameChange}
                        />
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                {this.state.persons.map(person => <Name person={person} key={person.name}/>)}
            </div>
        )
    }
}

export default App