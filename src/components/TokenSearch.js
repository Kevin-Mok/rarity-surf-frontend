import { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom";

const TokenSearch = ({ onSearch }) => {
  const [tokenID, setTokenID] = useState('')
  let { projSlug, tokenIDSlug } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (tokenIDSlug) {
      onSearch(projSlug, tokenIDSlug)
    }
  }, [tokenIDSlug]);

  const onSubmit = (e) => {
    e.preventDefault()

    if (!tokenID) {
      return
    }

    history.push(`/${projSlug}/${tokenID}`);
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
