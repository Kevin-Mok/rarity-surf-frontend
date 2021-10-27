import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import TokenSearch from './components/TokenSearch'
import Token from './components/Token'

function App() {
  const [token, setToken] = useState()

  const getTokenQuery = (projSlug, number) => { return `query {
      tokenByNumber(projSlug: "${projSlug}", number: ${number}) {
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

  const getToken = (projSlug, number) => {
    fetch('http://127.0.0.1:8000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ 
        query: getTokenQuery(projSlug, number)
      })
    })
      .then(r => r.json())
      .then(data => {
        const tokenData = data.data.tokenByNumber
        console.log(tokenData)
        setToken(tokenData)
      });
  }

  return (
    <Router>
      <Route path="/:projSlug/:tokenIDSlug">
        <div className="App">
          <Token token={token}/>
          <TokenSearch onSearch={getToken}/>
        </div>
      </Route>
    </Router>
  );
}

export default App;
