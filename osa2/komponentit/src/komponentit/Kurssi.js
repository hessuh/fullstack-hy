import React from 'react'

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

export default Kurssi;