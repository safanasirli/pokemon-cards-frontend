import React from 'react';
import './PokemonForm.css';

const PokemonForm = ({ pokemon, handleSubmit, handleChange }) => (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="name">Name</label>
      <input 
        placeholder="Pokemon Name"
        value={pokemon.name }
        name="name"
        onChange={ handleChange }
        required 
        id="name"
      />
    </label>
    <label htmlFor="image">Image
      <input 
        placeholder="Pokemon Image"
        value={pokemon.image }
        name="image"
        onChange={ handleChange }
        id="image"
      />
    </label>
      <label htmlFor="description">Description</label>
      <input 
          placeholder="Pokemon Description"
          value={ pokemon.description }
          name="description"
          onChange={ handleChange } 
          id="description"
        />
      <label htmlFor="price">Price</label>
      <input 
          placeholder="Pokemon Price"
          value={ pokemon.price }
          name="price"
          onChange={ handleChange } 
          id="price"
        />
      <label htmlFor="image">Image</label>
      <input 
          placeholder="Pokemon Image URL"
          value={ pokemon.image }
          name="image"
          onChange={ handleChange }
          id="image"
        />
      <button type="submit">Submit</button>
    </form>
);

export default PokemonForm;