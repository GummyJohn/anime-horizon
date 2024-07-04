import { useState} from 'react'
import { motion } from 'framer-motion'
import AnimeHorizon from './sildes/AnimeHorizon'
import CharacterExplore from './sildes/CharacterExplore'
import RecommendationTxt from './sildes/RecommendationTxt'
import Background from './sildes/Background'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft, faChevronRight, faCircle,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const images = [
    {
      id: 1, 
      url: '../src/img/girl-7628308_1920.jpg', 
      element: <AnimeHorizon/>
    },
    {
      id: 2,
      url: '../src/img/sunset-7628289_1920.jpg', 
      element: <CharacterExplore/>
    },
    {
      id: 3,
      url: '../src/img/man-7628305_1920.jpg', 
      element: <RecommendationTxt/>
    },
    {
      id: 4,
      url: '../src/img/backpacker-7628303_1920.jpg', 
      element: <Background/>
    },
  ]

  const bgImg = {
    backgroundImage: `url(${images[currentImg].url})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'ease-in-out 1s'
  }

  function nextImage(index){
    if(index === (images.length - 1)){
      setCurrentImg(0)
    }else{
      setCurrentImg(index + 1)
    }
  }

  function pervImage(index){
    if(index === 0){
      setCurrentImg((images.length-1))
    }else{
      setCurrentImg(index - 1)
    }
  }

  return (
    <>
      <div
        style={bgImg}
        className='
          flex justify-center items-center relative 
          h-[100vh]
        '
      > 
        <div className='max-w-[1750px] mt-12 flex items-center px-5'>
          <button
            className='
              hidden text-white p-2 rounded-full hover:bg-black
              sm:inline
            '
            onClick={() => pervImage(currentImg)}
          >
            <FontAwesomeIcon 
              icon={faChevronLeft} 
              className='text-5xl p-2 '
            />
          </button>

          <motion.div 
            initial={{x: '100vw'}}
            animate={{x: 0}} 
            transition={{delay: .5}}  
            className='h-full text-white 
            w-full border-2 rounded-2xl relative  mx-auto text-center flex flex-col justify-between 
              md:w-7/12 md:h-[600px]
              lg:h-[400px]
            '
          >
            <div className='absolute bg-black opacity-60 w-full h-full z-0 rounded-2xl '></div>

            <div className='
              relative z-10 p-6 
            '>
              {images.map((ele, index) => {
                if(index === currentImg){
                  return (
                    <motion.div
                      initial={{opacity: 0}}
                      animate={{opacity: 1}} 
                      transition={{delay: .9}}
                      key={ele.id}
                    >
                      {ele.element}
                    </motion.div> 
                  )
                }
              })}
            </div>

            <div className='pb-4 spx-4 flex justify-center w-full
            '>
              <div className='
                flex items-center justify-center relatvie z-20
              '>
                {images.map((btn, index) => {
                  return (
                    <button 
                      key={btn.id}
                      className='mx-2'
                      onClick={() => setCurrentImg(index)}
                    >
                      {
                        currentImg === index ?
                        <FontAwesomeIcon icon={faCircleXmark} className='text-3xl'/> : 
                        <FontAwesomeIcon icon={faCircle}/> 
                      }
                    </button>
                  )
                  })
                }
              </div>
            </div>
          </motion.div>


          <button
            className='
              hidden text-white p-2 rounded-full hover:bg-black
              sm:inline
            '
            onClick={() => nextImage(currentImg)}
          >
            <FontAwesomeIcon 
              icon={faChevronRight} 
              className='text-5xl p-2 '
            />
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
