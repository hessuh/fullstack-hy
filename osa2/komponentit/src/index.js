import React from 'react'
import ReactDOM from 'react-dom'


const Osa = ({osa}) => <p>{osa.nimi} {osa.tehtavia}</p>
const Otsikko = ({otsikko}) => <h1>{otsikko}</h1>
const Sisalto = ({osat}) => <div>{osat.map(osa => <Osa osa={osa} key={osa.id}/>)}</div>
const Yhteensa = ({osat}) => <p>yhteensä {sum(osat)} tehtävää</p>

const sum = (osat) => osat.reduce((yht, iter) => yht + iter.tehtavia, 0)


const Kurssi = ({kurssi}) => {
    return (
        <div>
            <Otsikko nimi={kurssi.nimi}/>
            <Sisalto osat={kurssi.osat}/>
            <Yhteensa osat={kurssi.osat}/>
        </div>
    )
}

const App = () => {
    const kurssit = [
        {
            nimi: 'Half Stack -sovelluskehitys',
            osat: [
                {
                    nimi: 'Reactin perusteet',
                    tehtavia: 10,
                    id: 1
                },
                {
                    nimi: 'Tiedonvälitys propseilla',
                    tehtavia: 7,
                    id: 2
                },
                {
                    nimi: 'Komponenttien tila',
                    tehtavia: 14,
                    id: 3
                },
            ]
        },
        {
            nimi: 'Node.js',
            id: 2,
            osat: [
                {
                    nimi: 'Routing',
                    tehtavia: 3,
                    id: 1
                },
                {
                    nimi: 'Middlewaret',
                    tehtavia: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <div>
            <h1>Half-Stack -sovelluskehitys</h1>

            {kurssit.map(kurssi => <Kurssi kurssi={kurssi} key={kurssi.id}/>)}
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)