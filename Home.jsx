import React from 'react'
import pdf from '../pdf/ATS70A.pdf'
import Hero from './Data/hero.json'

const Home = () => {
  return (
    <>
   
   <div className="container home">
    <div className="left">
      <h1>Hi i am a web developer</h1>
      <a href={pdf}   className="btn btn-outline-warning" target='_blank' download="Resume.pdf" >Download Resume</a>
      
    </div>
    <div className="right">
      <div className="img">
        <img src={`/assets/${Hero.imgSrc}`} alt="" />
      </div>
    </div>

   </div>

    </>
  )
}

export default Home