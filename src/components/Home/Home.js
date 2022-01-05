import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import MovieApi from '../../common/apis/MovieApi'
import APIKey from '../../common/apis/MovieApiKey'
import { addMovies } from '../../features/movies/MoviesSlice';
import MovieListing from '../MovieListing/MovieListing'

function Home() {
  const  dispatch = useDispatch();
  useEffect(() => {
    const movieText='harry';
    const fetchMovies=async()=>{
    const response = await MovieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    )
.catch((err)=>{
  console.log("Err:",err);
})
// console.log('response from call',response)
dispatch(addMovies(response.data))
   }
   fetchMovies();
  }, [])
  
    return (
        <div>
         <div className="banner-img"></div>
         <MovieListing/>
        </div>
    )
}

export default Home
