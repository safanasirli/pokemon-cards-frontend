import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../../config.js'
import PokemonForm from '../PokemonForm/PokemonForm.js';
import './PokemonCreate.css';

const PokemonCreate = () => {
  const initialPokemonState = {
    name: '',
    species: '',
    breed: '',
    age: Number
  }

  const [pokemon, setPokemon] = useState(initialPokemonState);
  const [createdId, setCreatedId] = useState(null);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    event.persist();
    setPokemon({
      ...pokemon,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `${ APIURL }/pokemons`

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(pokemon)
    })
      .then(response => response.json())
      .then(data => {
        setCreatedId(data._id);
      })
      .catch(() => {
        setError(true)
      })
  }

  if (createdId) {
    return <Redirect to={ `/pokemons/${createdId}`} />
  }

  return (
    <div>
      <h3>Create a Pokemon</h3>
      { error && <p>Something went wrong...Please try again!</p> }
      <PokemonForm 
        pokemon={ pokemon }
        handleChange={ handleChange }
        handleSubmit={ handleSubmit }
      />
    </div>
  )
}

export default PokemonCreate;