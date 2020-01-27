import React from 'react';
import Formularz from './components/Formularz';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
<Router>
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/form">Formularz</Link>
        </li>
      </ul>
    </nav>



      
        <Switch>
            <Route path="/form">
              <Formularz name="Lista zakupów" />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
      </Router>
    </div>
  );
} 

export default App;

const Welcome = () => {
  return(
    <h2>Hello Kamikaze</h2>
  )
}
