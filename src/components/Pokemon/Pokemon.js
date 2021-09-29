import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav';
import { APIURL } from '../../config';
import './Pokemon.css'

function Pokemon({ match }) {
    const [error, setError] = useState(false);
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`${APIURL}/pokemons/${match.params.id}`)
            .then(response => response.json())
            .then(data => {
                setPokemon(data)
                console.log(data)
            })
            .catch(() => {
                setError(true)
            })
    }, [match.params.id]);

    return (
        <div className="container">
            <Nav />
            <div className="pokemon-container">
                <section className="left">
                    <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />

                </section>
                <section className="right">
                    <h1>{pokemon.name}</h1>
                    <p className="description">{pokemon.description} </p>
                    <h2>${pokemon.price}</h2>
                    <button className="reserve-button"><Link to='/signup'>Reserve Pokemon</Link></button>
                </section>
            </div>
        </div>
    );
}

export default Pokemon;