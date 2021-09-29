import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { APIURL } from "../../config";

function Home() {
    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`${APIURL}/pokemons`)
            .then(response => response.json())
            .then(data => {
                setPokemons(data)
                console.log(data)
            })
            .catch(() => {
                setError(true)
            })
    }, []);

    if (error) {
        return <div>Sorry, can't get pokemons.</div>
    }
    return (
        <div className="container">
            <header>
                <Nav />
            </header>
            <main>
                <ul className="pokemon-list">
                    {pokemons.map(pokemon => {
                        return (
                            <li className="pokemon-card" key={pokemon._id}>
                                <Link to={`/pokemons/${pokemon._id}`}>
                                    <img className="pokemon-list-images" src={pokemon.image} alt={pokemon.name} />
                                    <div className="card-text">
                                        <h1>{pokemon.name}</h1>
                                        <h3>${pokemon.price}</h3>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;