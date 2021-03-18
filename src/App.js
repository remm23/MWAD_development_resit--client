// Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Navigation from './components/Navigation';
import Store from './components/Store';
import Management from './components/Management';
import Login from './components/Login';

// React router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation component should show all the time */}
        <Navigation/>
        <Switch>
          {/* 
            components will show depending onthe route
          */}
          <Route path="/" exact component={Login} />
          <Route path="/store" component={Store} />
          <Route path="/management" component={Management} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
