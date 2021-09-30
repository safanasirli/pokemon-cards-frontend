import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Pokemon from './components/Pokemon/Pokemon';
import PokemonCreate from './components/PokemonCreate/PokemonCreate';
import UpdatePokemon from './components/UpdatePokemon/UpdatePokemon';

function App() {
return (
	<div className='App'>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/pokemons/create' component={PokemonCreate} />
			<Route exact path='/pokemons/:id' component={Pokemon} />
			<Route exact path='/pokemons/:id/update' component={UpdatePokemon} />
		</Switch>
	</div>
);
}

export default App;