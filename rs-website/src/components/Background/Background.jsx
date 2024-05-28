import './Background.css'
import PropTypes from 'prop-types'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

const Background = ({ heroCount, playStatus }) => {
  if (playStatus) {
    return (
      <video autoPlay loop muted>
        <source src={video1} type="video/mp4"></source>
      </video>
    )
  } else if (heroCount === 0) {
    return <img src={image1} className="background" alt="" />
  } else if (heroCount === 1) {
    return <img src={image2} className="background" alt="" />
  } else if (heroCount === 2) {
    return <img src={image3} className="background" alt="" />
  }
  return null
}

Background.propTypes = {
  playStatus: PropTypes.bool.isRequired,
  heroCount: PropTypes.number.isRequired,
}

export default Background
