import Trait from './Trait'

const Traits = ({ traits }) => {
  return (
    <>
      {traits.map(trait => (
        <Trait trait={trait}/>
      ))}
    </>
  )
}

export default Traits
