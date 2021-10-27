const Trait = ({ trait }) => {
  const traitType = trait.traitType.name
  return (
    <li>{traitType}: {trait.name}</li>
  )
}

Trait.defaultProps = {
  trait: {
    traitType: {}
  },
}

export default Trait
