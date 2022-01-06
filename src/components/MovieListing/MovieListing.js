import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/MoviesSlice'
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss'
function MovieListing() {
    const movies=useSelector(getAllMovies);
    const shows=useSelector(getAllShows);
    let rendermovies,rendershows="";

    rendermovies=movies.Response==="True"?(
        movies.Search.map((movie,index)=>(
<MovieCard   key={index} data={movie}/>
    ))
    ):
    (
<div className="movies-error">
<h3>{movies.Error}</h3>
</div>
    )
    rendershows=shows.Response==="True"?(
        shows.Search.map((movie,index)=>(
<MovieCard   key={index} data={movie}/>
    ))
    ):
    (
<div className="shows-error">
<h3>{shows.Error}</h3>
</div>
    )
    return (
       <div className="movie-wrapper">
           <div className="movie-list">
<h2>movies</h2>
<div className="movie-container">{rendermovies}</div>
           </div>
           <div className="movie-list">
<h2>Series</h2>
<div className="movie-container">{rendershows}</div>
           </div>
       </div>
    )
}

export default MovieListing
