const Trait = ({ trait }) => {
  const traitType = trait.traitType.name
  return (
    <li key={trait.name}>
      <p className="inline font-semibold">{traitType}</p>
      : {trait.name}
    </li>
  )
}

Trait.defaultProps = {
  trait: {
    traitType: {}
  },
}

export default Trait
