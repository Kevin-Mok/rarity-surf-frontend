import Trait from './Trait'

const Traits = ({ traits }) => {
  return (
    <>
      {traits.map(trait => (
        <li className="text-base" key={trait.name}>
          <Trait trait={trait}/>
        </li>
      ))}
    </>
  )
}

Traits.defaultProps = {
  traits: [],
}

export default Traits
