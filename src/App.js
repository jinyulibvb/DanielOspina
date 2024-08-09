import './styles.css'
import React, {useState} from 'react'

import bed from './assets/bed.jpeg'
import black from './assets/black.jpeg'
import nude from './assets/nude.jpeg'
import window from './assets/window.jpeg'
import picnic from './assets/picnic.jpeg'
import purple from './assets/purple.jpeg'

const images = [nude, picnic, purple, bed, black, window]

const App = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const handelClick = () => {
    const length = images.length - 1

    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0
    })
  }

  console.log(currentImage)
  return (
    <section>
      <header>
        <h1>
          Daniel <br /> Ospina
        </h1>
        <h2>
          Model & Dancer
          <br /> Daniospinajc@gmail.com
        </h2>
        <h3>
          Made by <a href="https://www.jinyuli.cc/"> Jinyu Li</a>
        </h3>
      </header>

      <figure>
        <img alt="" src={images[currentImage]} onClick={handelClick} />
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
      </figure>
    </section>
  )
}

export default App
