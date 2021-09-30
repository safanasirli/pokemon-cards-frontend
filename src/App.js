import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Pokemon from './components/Pokemon/Pokemon';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Checkout/Cart';

function App() {
  const[logged, setLogged]= useState(false);
  return (
    <div className="App">
      {
        logged ? 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/pokemons/:id' component={Pokemon} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
            :
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' render={props => <Login setLogged={setLogged} logged ={logged}
          {...props} />} />
          <Route exact path='/signup' component={Signup} />
          <Route path='/pokemons/:id' component={Pokemon} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      }
    </div>
  );
}

export default App;