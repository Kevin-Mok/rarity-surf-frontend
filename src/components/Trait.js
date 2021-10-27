const Trait = ({ trait }) => {
  const traitType = trait.traitType.name
  return (
    <li className="text-base" key={trait.name}>
      <p className="inline font-semibold">{traitType}</p>
      : {trait.name} ({trait.rarity}%, {trait.score})
    </li>
  )
}

Trait.defaultProps = {
  trait: {
    traitType: {}
  },
}

export default Trait
