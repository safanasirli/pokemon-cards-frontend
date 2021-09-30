import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APIURL } from '../../config';
import Header from '../Header/Header';
import './Pokemon.css';

function Pokemon({ match }) {
    const [error, setError] = useState(false);
    const [pokemon, setPokemon] = useState([]);

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
            <Header />
            <div className="pokemon-container">

                <section className="left">
                    <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />
                </section>

                <section className="right">
                    <h1>{pokemon.name}</h1>
                    <p className="description">{pokemon.description} </p>
                    <h2>${pokemon.price}</h2>
                    <button className="home-button"><Link to='/'>Home</Link></button>
                </section>

            </div>
        </div>
    );
}

export default Pokemon;