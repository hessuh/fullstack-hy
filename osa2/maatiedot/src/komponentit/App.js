import React from 'react'
import axios from 'axios'

import Countries from './Countries'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            filter: ''
        }
    }

    componentWillMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(res => {
                console.log(res.data)
                this.setState({countries: res.data})
            })
    }

    filterChangeHandle = (event) => {
        this.setState({filter: event.target.value})
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.filter}
                    onChange={this.filterChangeHandle}
                />
                {this.state.filter}
                <Countries countries={this.state.countries}/>

            </div>
        )
    }
}

export default App;
//                <Countries countries={this.state.countries}/>
