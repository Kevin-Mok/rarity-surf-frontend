import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react'
import TokenSearch from './components/TokenSearch'
import Token from './components/Token'

function App() {
  const [token, setToken] = useState()

  const getTokenQuery = (projName, number) => { return `query {
      tokenByNumber(projName: "${projName}", number: ${number}) {
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
  }

  const getToken = (number) => {
    fetch('http://127.0.0.1:8000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ query: getTokenQuery("The Sevens", number) })
    })
      .then(r => r.json())
      .then(data => {
        console.log('data returned:', data)
        setToken(data.data.tokenByNumber)
      });
  }

  return (
    <div className="App">
      <Token token={token}/>
      <TokenSearch text="Update" onSearch={getToken}/>
    </div>
  );
}

export default App;
