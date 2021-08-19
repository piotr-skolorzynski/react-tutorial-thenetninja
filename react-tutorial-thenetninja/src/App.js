import './App.css';

function App() {

  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "http://www.google.pl";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{ 10 }</p>
        <p>{ [1,2,3,4,5,6] }</p>
        <p>{ Math.random() * 10 }</p>
        <a href={ link } target="_blank">Google site</a>
      </div>
    </div>
  );
}

export default App;

//dynamicznie nie da się dodać obiektu np. person = {name: "mario", age: 30} oraz booleans