import React from 'react'

const Country = ({ countries }) => {


    return (
        <article>
            <img src={countries?.flags.svg} alt={countries?.flags.svg} />
            <h1>{countries?.name.common}</h1>
            <p>Capital: {countries?.capital}</p>
            <p>Superficie: {countries?.area} km²</p>
            <p>Población: {countries?.population}</p>
            <p>Continente : {countries?.region}</p>
        </article>

    )
}

export default Country