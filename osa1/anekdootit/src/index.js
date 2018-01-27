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

    vote_anecdote = () => () => {
        this.state.anecdotes[this.state.anecdotes.indexOf(this.state.selected)].votes++
        this.setState({
            anecdotes: this.state.anecdotes
        })};

    Button = ({func, text}) => {
        return (
                <button onClick={func()}> {text} </button>
        )
    };

    Anecdote = ({anecdote}) => {
        return (
            <div>
                <div>
                    {anecdote.text}
                </div>
                <div>
                    Votes: {anecdote.votes}
                </div>
            </div>
        )
    };

    most_voted_anecdote = () => {
        let i, max;
        i = max = 0;
        for (let x = 0; x < this.state.anecdotes.length; x++ ) {
            if (this.state.anecdotes[x].votes > max) {
                max = this.state.anecdotes[x].votes;
                i = x;
            }
        }
        return this.state.anecdotes[i];
    };

    render() {
        return (
            <div>
                <this.Anecdote anecdote={this.state.selected}/>
                <this.Button func={this.vote_anecdote} text="Vote"/>
                <this.Button func={this.random_anecdote} text="Next anecdote"/>
                <div>
                    <b> Anecdote with most votes: </b>
                    <this.Anecdote anecdote={this.most_voted_anecdote()}/>
                </div>
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
