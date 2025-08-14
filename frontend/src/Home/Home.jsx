import React from 'react'
import { useState, useEffect} from 'react'
import About from './About'
import Program from './program'

const Home = () => {

  const [url, seturl] = useState("photos/lovetolearn.avif")

  useEffect(() => {
    call()
  }, [])


  const chengeimg = async (a) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(seturl(a))
      }, 3000)
    })
  }

  const call = async () => {
  
    await chengeimg("photos/third.jpg")
    await chengeimg("photos/first.jpg")
    await chengeimg("photos/topper.jpg")
    await chengeimg("photos/event3.jpg")
    await chengeimg("photos/event5.jpg")
  }

  return (
    <>

      <div className="galry">
        <img src={url} className='sm:h-screen w-full h-[65vh]'></img>
      </div>

      <div className=' container sm:w-[80%] mx-auto w-[94%]'>

      <About />
      <Program />

      </div>
      
    </>
  )
}

export default Home
