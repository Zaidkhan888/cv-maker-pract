


// import './App.css';
import Home from './components/Home/Home';
import React ,{Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
       <Link to="/">
                    <button className="btn btn-primary" >log out</button>
                </Link>
      <Home />
      </div>
  );
}

export default App;
