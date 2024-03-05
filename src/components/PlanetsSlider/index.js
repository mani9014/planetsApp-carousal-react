// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="planet-bg-container" data-testid="planets">
      <Slider {...settings}>
        {planetsList.map(eachList => (
          <PlanetItem planetDetails={eachList} key={eachList.id} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
