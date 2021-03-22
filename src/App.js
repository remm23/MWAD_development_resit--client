import React, { useState, useEffect } from 'react';
// Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Navigation from './components/Navigation';
import Store from './components/Store';
import Management from './components/Management';
import Login from './components/Login';
import Signup from './components/Signup';

import { Jumbotron } from 'react-bootstrap';

// React router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  // Hook for setting the title
  const [title, setTitle] = useState('');
	
	// effect to change title base on page
	useEffect(() => {
		// remove forward slash
		const currentPath = window.location.pathname.slice(1);
    // console.log("effect",currentPath)
		if (currentPath === "" || currentPath === "login") {setTitle('login')}
		else { setTitle(currentPath) }
	},[]);

  const handleSetTitle = () => {
    setTitle('login')
  }


  return (
    <Router>
      <div className="App">
        {/* Navigation component should show all the time */}
        <Navigation title={title} handleSetTitle={handleSetTitle} />
        <Switch>
          {/* 
            components will show depending onthe route
          */}
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup"  component={Signup} />
          <Route path="/store" component={Store} />
          <Route path="/management" component={Management} />
        </Switch>
        <Jumbotron className='footer'></Jumbotron>
      </div>
    </Router>
  );
}

export default App;
