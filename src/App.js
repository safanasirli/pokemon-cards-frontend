import { Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Pokemon from './components/Pokemon/Pokemon'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/cart' component={Cart} />
        <Route path='/pokemons/:id' component={Pokemon} />
      </Switch>
    </div>
  );
}

export default App;
