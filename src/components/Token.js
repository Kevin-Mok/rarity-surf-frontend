const Token = ({ token }) => {
  return (
  <ul>
    <li>#: {token.number}</li>
  </ul> 
  )
}

Token.defaultProps = {
  // number: -1,
  token: {number: -1},
}

export default Token
