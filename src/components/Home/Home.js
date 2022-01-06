import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
// import MovieApi from '../../common/apis/MovieApi'
// import APIKey from '../../common/apis/MovieApiKey'
import { addMovies, fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MoviesSlice';
import MovieListing from '../MovieListing/MovieListing'

function Home() {
  const  dispatch = useDispatch();
  useEffect(() => {
  
   dispatch(fetchAsyncMovies())
   dispatch(fetchAsyncShows())
  
  }, [dispatch])
  
    return (
        <div>
         <div className="banner-img"></div>
         <MovieListing/>
        </div>
    )
}

export default Home
