import React from 'react';
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './Pokemon.css'
function Pokemon() {
    return (
        <div className="container">
            <Nav />
            <div className="pokemon-container">
                <section className="left">
                    <img className="pokemon-image" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt="Venusaur" />

                </section>
                <section className="right">
                    <h1>Venusaur</h1>
                    <h2>$1000</h2>
                    <p className="description">A bewitching aroma wafts from its flower. The fragrance becalms those engaged in a battle. </p>
                    <button className="reserve-button"><Link to='/signup'>Reserve Pokemon</Link></button>
                </section>
            </div>
        </div>
    );
}

export default Pokemon;