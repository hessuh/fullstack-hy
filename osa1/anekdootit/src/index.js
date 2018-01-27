import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props);
        const arr = this.props.anecdotes.map(a => ({text: a, votes: 0}));
        this.state = {
            selected: arr[0],
            anecdotes: arr
        }
    }

    random_anecdote = () => () =>
        this.setState({
            selected: this.state.anecdotes[Math.floor(Math.random() * Math.floor(this.state.anecdotes.length))]
        });

    Button = ({func, text}) => {
        return (
            <div>
                <button onClick={func()}> {text} </button>
            </div>
        )
    };

    Anecdote = () => {
        return (
            <div>
                {this.state.selected.text}
            </div>
        )
    };

    render() {
        return (
            <div>
                <this.Anecdote/>
                <this.Button func={this.random_anecdote} text="Random"/>
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes}/>,
    document.getElementById('root')
)
