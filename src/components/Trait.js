const Trait = ({ trait }) => {
  const traitType = trait.traitType.name
  return (
    <>
    <p className="inline font-semibold">{traitType}</p>
    : {trait.name} ({trait.rarity}%, {trait.score})
    </>
  )
}

Trait.defaultProps = {
  trait: {
    traitType: {}
  },
}

export default Trait
