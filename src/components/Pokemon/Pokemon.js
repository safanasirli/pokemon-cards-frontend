import React from 'react';
import { Link } from 'react-router-dom'
import './Pokemon.css'
function Pokemon() {
    return (
        <div className="pokemon-container">
            <section className="left">
                <img className="pokemon-image" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt="Venusaur" />
                <p>Description:A bewitching aroma wafts from its flower. The fragrance becalms those engaged in a battle. </p>
            </section>
            <section className="right">
                <h1>Name: Venusaur</h1>
                <h1>$1000</h1>
                <button><Link to='/signup'>Reserve Pokemon</Link></button>
            </section>
        </div>
    );
}

export default Pokemon;