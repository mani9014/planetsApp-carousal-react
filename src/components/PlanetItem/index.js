// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planets-Item-container">
      <h1 className="planet-heading">PLANETS</h1>
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
