import Traits from './Traits'

const Token = ({ token }) => {
  return (
  <ul>
    <li>#: {token.number}</li>
    <ul>
      <Traits traits={token.traits}/>
    </ul> 
  </ul> 
  )
}

Token.defaultProps = {
  token: {
    number: -1, 
    traits: [] 
  },
}

export default Token
