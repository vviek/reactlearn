import UpdatedLogo from './Icons/ic_launcher.webp';
import HeaderCustom from './Components/Header_Com.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={UpdatedLogo} className="App-logo" alt="logo" />
        <h1>Welcome to Git Configuration!</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HeaderCustom name="Vishal" age="test" />

    </div>
  );
}

export default App;
