import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            positive: 0,
            neutral: 0,
            bad : 0
        }
    }

    ClickPositive= () => {
        this.setState({
            positive: this.state.positive + 1
        })
    };

    ClickNeutral = () => {
        this.setState({
            neutral: this.state.neutral + 1
        })
    };

    ClickBad = () => {
        this.setState({
            bad: this.state.bad + 1
        })
    };


    GiveFeedback = () => {
        return (
            <div>
                <p> Anna palautetta </p>
                <button onClick={this.ClickPositive}>Hyvä</button>
                <button onClick={this.ClickNeutral}>Neutraali</button>
                <button onClick={this.ClickBad}>Huono</button>
            </div>
        )
    };

    Statistics = () => {
        return (
            <div>
                <p> Statistiikka </p>
                <div>
                    Hyvä {this.state.positive}
                </div>
                <div>
                    Neutraali {this.state.neutral}
                </div>
                <div>
                    Huono {this.state.bad}
                </div>

            </div>
        )
    };

    render() {
        return (
            <div>
                <this.GiveFeedback/>
                <this.Statistics/>
            </div>
        )
    }

};



ReactDOM.render(
    <App/>,
    document.getElementById('root')
);