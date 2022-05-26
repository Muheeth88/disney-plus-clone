/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <nav>
        <img className='logo' src='/images/logo.svg' alt=''></img>
        <div className='navMenu'>
            <a><img src='/images/home-icon.svg' alt=''></img> <span>HOME</span></a>
            <a><img src='/images/search-icon.svg' alt=''></img> <span>SEARCH</span></a>
            <a><img src='/images/watchlist-icon.svg' alt=''></img> <span>WATCHLIST</span></a>
            <a><img src='/images/original-icon.svg' alt=''></img> <span>ORIGINALS</span></a>
            <a><img src='/images/movie-icon.svg' alt=''></img> <span>MOVIES</span></a>
            <a><img src='/images/series-icon.svg' alt=''></img> <span>SERIES</span></a>
        </div>
        <img className='userImg' src='' alt='dp'></img>
    </nav>
  )
}

export default Header