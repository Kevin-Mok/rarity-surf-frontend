import logo from './logo.svg';
import './App.css';

function App() {
  const number = 0
  const query = `query {
    tokenByNumber(number: 0) {
      number
      imageUrl
      traits {
        traitType {
          name
        }
        name
        rarity
      }
      score
    }
  }`

  fetch('http://127.0.0.1:8000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { number },
    })
  })
    .then(r => r.json())
    .then(data => console.log('data returned:', data));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
