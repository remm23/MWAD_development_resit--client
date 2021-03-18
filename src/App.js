// Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Login from './components/Login';
import Navigation from './components/Navigation';

// Bootstrap styles
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Jumbotron>
        <Container>
          <h1>Customer Database</h1>
        </Container>
      </Jumbotron>
      <Login/>
    </div>
  );
}

export default App;
