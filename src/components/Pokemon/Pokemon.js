import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { APIURL } from '../../config';
import Header from '../Header/Header';
import './Pokemon.css';

function Pokemon({ match }) {
	const [deleted, setDeleted] = useState(false);
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

	console.log(match.params.id)

	const onDeletePokemon = (event) => {
		const url = `${APIURL}/pokemons/${match.params.id}`;

		fetch(url, { method: 'DELETE' })
			.then((res) => {
					setDeleted(true);
			})
			.catch(console.error);
	};

	if (deleted) {
		return <Redirect to='/' />;
	}

	if (error) {
		return <div>Sorry, there was a problem getting the pokemons</div>;
	}

	if (!pokemon) {
		return <div>Loading...</div>;
	}

	return (
		<div className='container'>
				<Header />
				<div className='pokemon-container'>
					<section className='left'>
						<img className='pokemon-image' src={pokemon.image} alt={pokemon.name} />
					</section>
					<section className='right'>
						<h1>{pokemon.name}</h1>
						<p className='description'>{pokemon.description}</p>
						<h2>${pokemon.price}</h2>
						<div className='buttons'>
							{/* update button */}
							<Link to={`/pokemons/${match.params.id}/update`}>
								<button className='update-button'>Update Pokemon</button>
							</Link>
							{/* delete button */}
							<button className='update-button' onClick={onDeletePokemon}>Delete Pokemon</button>
						</div>
					</section>
				</div>
		</div>
	);
}

export default Pokemon;