import React from 'react'
import Osa from './Osa'
const Sisalto = ({osat}) => <div>{osat.map(osa => <Osa osa={osa} key={osa.id}/>)}</div>
export default Sisalto