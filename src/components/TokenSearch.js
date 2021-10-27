import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const TokenSearch = ({ onSearch }) => {
  const [tokenID, setTokenID] = useState('')
  let { projSlug, tokenIDSlug } = useParams();

  useEffect(() => {
    onSearch(projSlug, tokenIDSlug)
  }, []);

  const onSubmit = (e) => {
    e.preventDefault()

    if (!tokenID) {
      return
    }

    onSearch(projSlug, tokenID)

    setTokenID('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Token ID</label>
        <input
          type='text'
          value={tokenID}
          onChange={(e) => setTokenID(e.target.value)}
        />
      </div>
      <input type='submit' value='Search Token' className='btn btn-block' />
    </form>
  )
}

export default TokenSearch
