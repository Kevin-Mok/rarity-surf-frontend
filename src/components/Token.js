import { useLocation, Link } from "react-router-dom";

import Traits from './Traits'

const Token = ({ token }) => {
  const domainName = "raritycheck.art"

  return (
    <div className="container flex justify-items-start">
      <img className="object-contain w-64 m-5 rounded-lg float-left" src={token.imageUrl} alt="Token Image"/>
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
          <p className="inline">: {token.score}</p>
        </li>
        <li>Traits (in order of rarity)
          <ul className="list-disc pl-4">
            <Traits traits={token.traits}/>
          </ul> 
        </li>
        <li className="list-none pt-1 pl-16 text-sm text-blue-300 opacity-60 underline">
          <Link to={useLocation().pathname}>
            {`${domainName}${useLocation().pathname}`}
          </Link>
        </li>
      </ul> 
    </div>
  )
}

Token.defaultProps = {
  token: {
    number: -1, 
    imageUrl: '', 
    traits: [] 
  },
}

export default Token
