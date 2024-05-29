import { useState } from 'react'
import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

const App = () => {
  let heroData = [
    { text1: 'Dive into', text2: 'what you love' },
    { text1: 'Indulge', text2: 'Your passions' },
    { text1: 'Give in to', text2: 'Your passions' },
  ]
  const [heroCount, setHeroCount] = useState(2)
  const [playStatus, setPlayStatus] = useState(false)
  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        setHeroCount={setHeroCount}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App
