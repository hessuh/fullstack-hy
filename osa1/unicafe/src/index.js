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

        this.values = {
            positive: {
                state: "this.state.positive",
                text: "Hyvä"
            },
            neutral: {
                state: "neutral",
                text: "Neutraali"
            },
            negative: {
                state: "this.state.negative",
                text: "Huono"
            }
        }
    }

    ClickPositive = () => {
        this.setState({
            positive: this.state.positive + 1
        })
    };

    ClickNeutral = () => {
        this.setState({
            neutral: this.state.neutral + 1
        })
    };

    ClickNegative = () => {
        this.setState({
            negative: this.state.negative + 1
        })
    };

    Button = (props) => {
        return (
            <button onClick={props.type}> {props.text} </button>
        )
    }

    GiveFeedback = () => {
        return (
            <div>
                <p> Anna palautetta </p>
                <this.Button text={"Hyvä"} type={this.ClickPositive} />
                <this.Button text={"Neutraali"} type={this.ClickNeutral} />
                <this.Button text={"Huono"} type={this.ClickNegative} />
            </div>
        )
    };

    Statistic = (props) => {
        return (
            <div>
                {props.stats.text} {props.jep}
            </div>
        )
    }

    Statistics = (props) => {
        const average = () => ((this.state.positive - this.state.negative) / (this.state.positive + this.state.neutral + this.state.negative)).toFixed(1)
        const positivePercentage  = () => ((this.state.positive / (this.state.positive + this.state.neutral + this.state.negative))*100).toFixed(1) + ' %'

        return (
            <div>
                <p> Statistiikka </p>
                <this.Statistic stats={this.values.positive} jep={this.state.positive}/>
                <this.Statistic stats={this.values.neutral} jep={this.state.neutral}/>
                <this.Statistic stats={this.values.negative} jep={this.state.negative}/>
                <this.Stats fun={average()}/>
                <this.Stats fun={positivePercentage()}/>
            </div>
        )
    }

    Stats = (props) => {
        return (
            <div>
                {props.fun}
            </div>
        )
    }

    render() {
        if ((this.state.positive + this.state.negative + this.state.neutral) > 0) {
            return (
                <div>
                    <this.GiveFeedback/>
                    <this.Statistics values={this.values}/>
                </div>
            )
        }
        return (
            <div>
                <this.GiveFeedback/>
            </div>
        )

    }
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);