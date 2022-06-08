import logo from './logo.svg';
import './App.css';
import Test from './test';

function App() {
  //JSX
  return (
    <div className="App">
      <Test name="Heinz" city="Berlin" array={[1, 2, 3, 4]} show={true} />
      <Test name="Klaus" city="München" array={[1, 2, 4]} show={false} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hallo Welt</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
