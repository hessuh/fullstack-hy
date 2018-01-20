import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys';
    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    };
    const osa2 = {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    };
    const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    };

    return (
        <div>
            <Otsikko kurssi={kurssi}/>
            <Sisalto osa1={osa1} osa2={osa2} osa3={osa3}/>
            <Yhteensa osa1={osa1} osa2={osa2} osa3={osa3}/>
        </div>
    )
};

const Osa = (props) => {
    return (
        <div>
            <p>{props.osa} {props.tehtavia}</p>
        </div>
    )
};

const Sisalto = (props) => {
    return (
        <div>
            <Osa osa={props.osa1['nimi']} tehtavia={props.osa1['tehtavia']} />
            <Osa osa={props.osa2['nimi']} tehtavia={props.osa2['tehtavia']} />
            <Osa osa={props.osa3['nimi']} tehtavia={props.osa3['tehtavia']} />
        </div>
    )
};

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    )
};

const Yhteensa = (props) => {
    return (
        <div>
            <p>yhteensä {props.tehtavia1 + props.tehtavia2 + props.tehtavia3} tehtävää</p>
        </div>
    )
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);