import './Hero.css'
import PropTypes from 'prop-types'
import Arrow_icon from '../../assets/arrow_btn.png'
import Play_icon from '../../assets/play_icon.png'
import Pause_icon from '../../assets/pause_icon.png'

const Hero = ({
  setPlayStatus,
  setHeroCount,
  heroData,
  heroCount,
  playStatus,
}) => {
  
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the Features</p>
        <img src={Arrow_icon} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li className={heroCount===0 ? 'hero-dot orange' : 'hero-dot'} onClick={() => setHeroCount(0)}></li>
          <li className={heroCount===1 ? 'hero-dot orange' : 'hero-dot'} onClick={() => setHeroCount(1)}></li>
          <li className={heroCount===2 ? 'hero-dot orange' : 'hero-dot'} onClick={() => setHeroCount(2)}></li>
        </ul>
      <div className="hero-play">
        <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? Pause_icon : Play_icon} alt="" />
        <p>see the video</p>
      </div>
      </div>
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
