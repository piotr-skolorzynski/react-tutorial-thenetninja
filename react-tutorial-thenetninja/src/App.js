import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

//dynamicznie nie da się dodać obiektu np. person = {name: "mario", age: 30} oraz booleans