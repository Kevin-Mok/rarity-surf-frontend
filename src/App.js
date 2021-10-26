import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react'
import Button from './components/Button'
import Token from './components/Token'

function App() {
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

  const [token, setToken] = useState()

  // const getToken = (number) => {
  const getToken = () => {
    fetch('http://127.0.0.1:8000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ query })
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
      <Button text="Update" onClick={getToken}/>
    </div>
  );
}

export default App;
