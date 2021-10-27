import Traits from './Traits'

const Token = ({ token }) => {
  return (
    <div className="container flex justify-items-start">
      <img className="object-contain w-52 m-5 rounded-lg float-left" src={token.imageUrl} alt="Token Image"/>
      <ul className="list-disc my-auto mx-2">
        <li>
          <p className="inline font-semibold">Token ID</p>
          : #{token.number}
        </li>
        <li>
          <p className="inline font-semibold">Rank</p>
          : {token.rank}
        </li>
        <li>
          <p className="inline font-semibold">Score</p>
          : {token.score}
        </li>
        <li>Traits (in order of rarity)
          <ul className="list-disc pl-4">
            <Traits traits={token.traits}/>
          </ul> 
        </li>
      </ul> 
    </div>
  )
}

Token.defaultProps = {
  token: {
    number: -1, 
    traits: [] 
  },
}

export default Token
