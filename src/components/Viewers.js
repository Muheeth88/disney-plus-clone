import React from 'react'
import '../styles/Viewers.css'

const Viewers = () => {
  return (
    <div className='container'>
        <div className='content'>
            <div className='wrap'>
                <img src='/images/viewers-disney.png' alt=''></img>
            </div>
            <div className='wrap'>
                <img src='/images/viewers-pixar.png' alt=''></img>
            </div>
            <div className='wrap'>
                <img src='/images/viewers-marvel.png' alt=''></img>
            </div>
            <div className='wrap'>
                <img src='/images/viewers-starwars.png' alt=''></img>
            </div>
            <div className='wrap'>
                <img src='/images/viewers-national.png' alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default Viewers