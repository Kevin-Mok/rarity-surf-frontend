import { useState } from 'react'

const TokenSearch = ({ onSearch }) => {
  const [tokenID, setTokenID] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!tokenID) {
      return
    }

    onSearch(tokenID)

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
