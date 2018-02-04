import React from 'react'

const Yhteensa = ({osat}) => <p>yhteensä {sum(osat)} tehtävää</p>
const sum = (osat) => osat.reduce((yht, iter) => yht + iter.tehtavia, 0)

export default Yhteensa;