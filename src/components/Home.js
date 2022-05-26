import React, { useEffect } from 'react'
import '../styles/Home.css'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import db from '../firebase'
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'


const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data()}
      })
      dispatch(setMovies(tempMovies));
    })
  })

  return (
 
    <main>
        <ImgSlider/>
        <Viewers/>
        <Movies/>
    </main>

  )
}

export default Home