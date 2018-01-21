import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            positive: 0,
            neutral: 0,
            negative : 0
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

    ClickNegative= () => {
        this.setState({
            negative: this.state.negative+ 1
        })
    };


    GiveFeedback = () => {
        return (
            <div>
                <p> Anna palautetta </p>
                <button onClick={this.ClickPositive}>Hyvä</button>
                <button onClick={this.ClickNeutral}>Neutraali</button>
                <button onClick={this.ClickNegative}>Huono</button>
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
                    Huono {this.state.negative}
                </div>

            </div>
        )
    };

    render() {
        const average = () => ((this.state.positive - this.state.negative) / (this.state.positive + this.state.neutral + this.state.negative)).toFixed(1)
        const positivePercentage  = () => ((this.state.positive/(this.state.positive + this.state.neutral + this.state.negative))*100).toFixed(1) + ' %'
        return (
            <div>
                <this.GiveFeedback/>
                <this.Statistics/>
                <div>{average()}</div>
                <div>{positivePercentage()}</div>
            </div>
        )
    }

};



ReactDOM.render(
    <App/>,
    document.getElementById('root')
);