import React from 'react';
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
                <card>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png" alt="pokemon1" />
                    <div className="card-text">
                        <h1>Venusaur</h1>
                        <p>1000$</p>
                    </div>
                </card>
                <card>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" alt="pokemon2" />
                    <div className="card-text">
                        <h1>Charmeleon</h1>
                        <p>2000$</p>
                    </div>
                </card>
                <card>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" alt="pokemon3" />
                    <div className="card-text">
                        <h1>Squirtle</h1>
                        <p>1300$</p>
                    </div>
                </card>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;