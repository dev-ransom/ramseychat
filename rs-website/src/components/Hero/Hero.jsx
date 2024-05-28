import './Hero.css'
import PropTypes from 'prop-types'
import Arrow_icon from '../../assets/arrow_btn.png'
import Play_icon from '../../assets/play_icon.png'
import video_icon from '../../assets/pause_icon.png'

const Hero = ({
  setPlayStatus,
  setHeroCount,
  heroData,
  heroCount,
  playStatus,
}) => {
  return (
    <div className="hero">
      <div className="hero-text"></div>
    </div>
  )
}

Hero.propTypes = {
  playStatus: PropTypes.bool.isRequired,
  heroCount: PropTypes.number.isRequired,
  setPlayStatus: PropTypes.func.isRequired, // Correct type for a function
  setHeroCount: PropTypes.func.isRequired, // Correct type for a function
  heroData: PropTypes.array.isRequired, // Correct type for an array
}

export default Hero
