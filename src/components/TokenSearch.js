import { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom";

const TokenSearch = ({ onSearch }) => {
  const [tokenID, setTokenID] = useState('')
  let { projSlug, tokenIDSlug } = useParams();
  const history = useHistory();

  const appTitle = "Rarity Surf"
  const tokenIDIncrBy = 50

  useEffect(() => {
    // console.log("fetch");
    if (tokenIDSlug) {
      onSearch(projSlug, tokenIDSlug)
        .then(token => {
          document.title = `${token.tokenType.name} #${token.number} - ${appTitle}`
        })
    }
  }, [projSlug, tokenIDSlug]);

  const onSubmit = (e) => {
    e.preventDefault()

    if (!tokenID) {
      return
    }

    const incrTokenID = `${parseInt(tokenID) + tokenIDIncrBy}`

    /* TODO: use ref to set token ID on submit
     * useEffect to change URL
    */

    // history.push(`/${projSlug}/${tokenID}`);
    history.push(`/${projSlug}/${incrTokenID}`);

    setTokenID('')
  }

  return (
    <form onSubmit={onSubmit} className='mb-1 content-center'>
      <div className='form-control inline'>
        <label>Token ID</label>
        <input
          className='w-14 m-2 rounded text-black'
          type='text'
          value={tokenID}
          onChange={(e) => setTokenID(e.target.value)}
        />
      </div>
      <input type='submit' value='Search Token' 
        className='btn btn-block rounded text-black text-sm p-1 mb-2' />
    </form>
  )
}

export default TokenSearch
