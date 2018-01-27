import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            positive: 0,
            neutral: 0,
            negative : 0
        };

        this.functions = {
            average: () => (
                (this.state.positive - this.state.negative) / (this.state.positive + this.state.neutral + this.state.negative)).toFixed(1),
            positivePercentage: () => (
                (this.state.positive / (this.state.positive + this.state.neutral + this.state.negative)) * 100).toFixed(1) + ' %'
        }
    }

    ClickFeedback = (arvo) => () => {
        this.setState({
            [arvo]: this.state[arvo] + 1
        })
    };

    Button = (props) => {
        return (
            <button onClick={props.type}> {props.text} </button>
        )
    };

    GiveFeedback = () => {
        return (
            <div>
                <p> Anna palautetta </p>
                <this.Button text={"Hyvä"} type={this.ClickFeedback("positive")} />
                <this.Button text={"Neutraali"} type={this.ClickFeedback("neutral")} />
                <this.Button text={"Huono"} type={this.ClickFeedback("negative")} />
            </div>
        )
    };

    Statistic = (props) => {
        return (
            <div>
                {props.text} {props.state}
            </div>
        )
    };


    Statistics = (props) => {
        return (
            <div>
                <p>Statistiikka</p>
                <this.Statistic text={"hyvä"} state={this.state.positive}/>
                <this.Statistic text={"neutraali"} state={this.state.neutral}/>
                <this.Statistic text={"huono"} state={this.state.negative}/>
                <this.Stats fun={this.functions.average()}/>
                <this.Stats fun={this.functions.positivePercentage()}/>
            </div>
        )
    };

    Stats = (props) => {
        return (
            <div>
                {props.fun}
            </div>
        )
    };

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
                <p>Statistiikka</p>
                <p>Ei yhtään palautetta annettu</p>
            </div>
        )

    }
};




ReactDOM.render(
    <App/>,
    document.getElementById('root')
);