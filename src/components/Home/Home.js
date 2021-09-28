import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

function Home() {

    return (
        <div className="container">
            <header>
                <Nav />
            </header>
            <main>
                <ul className="pokemon-list">
                    <Link to='/pokemon'>
                        <li className="pokemon-card">
                            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png" alt="pokemon1" />
                            <div className="card-text">
                                <h1>Venusaur</h1>
                                <h3>1000$</h3>
                            </div>

                        </li>
                    </Link>
                    <li className="pokemon-card" >
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" alt="pokemon2" />
                        <div className="card-text">
                            <h1>Charmeleon</h1>
                            <h3>2000$</h3>
                        </div>
                    </li>
                    <li className="pokemon-card">
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" alt="pokemon3" />
                        <div className="card-text">
                            <h1>Squirtle</h1>
                            <h3>1300$</h3>
                        </div>
                    </li>
                </ul>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;