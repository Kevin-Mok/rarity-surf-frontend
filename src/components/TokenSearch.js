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
    <form onSubmit={onSubmit} className='mb-1 content-center'>
      <div className='form-control inline'>
        <label>Token ID</label>
        <input
          className='w-14 m-2 text-black'
          type='text'
          value={tokenID}
          onChange={(e) => setTokenID(e.target.value)}
        />
      </div>
      <input type='submit' value='Search Token' 
        className='btn btn-block text-black' />
    </form>
  )
}

export default TokenSearch
