import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies, addTrendingMovies } from "../utils/moviesSlice";
const useTrendingMovies=()=>{
    const dispatch=useDispatch();

    const trendingMovies=useSelector((store)=>store.movies.trendingMovies);
  const getTrendingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const json=await data.json();
    
    dispatch(addTrendingMovies(json.results));
  }

  useEffect(()=>{
    !trendingMovies &&  getTrendingMovies();
  },[]);
}
export default useTrendingMovies;