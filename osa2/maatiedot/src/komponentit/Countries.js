import React from 'react'
import Country from './Country'

const Countries = ({countries}) => {
    return (
        countries.map(country =>
            <Country
                country={country}
            />)
    )
};

export default Countries;