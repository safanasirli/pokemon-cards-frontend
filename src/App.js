import { Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Pokemon from './components/Pokemon/Pokemon'
import Checkout from './components/Checkout/Checkout'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/pokemon' component={Pokemon} />
      </Switch>
    </div>
  );
}

export default App;
