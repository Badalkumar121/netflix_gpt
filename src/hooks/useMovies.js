import {useCallback, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addMovies, changeErrorState } from "../utils/moviesSlice";
const useMovies = (API, category) => {
  const dispatch = useDispatch();
  const moviesCategory = useSelector((store) => store?.movies?.[category]);

  const getMovies = useCallback(async () => {
    try {
      const response = await fetch(API, API_OPTIONS);
      const json = await response.json();
      dispatch(
        addMovies({
          category: category,
          movies: json.results,
        })
      );
      dispatch(changeErrorState(false));
    } catch (error) {
      console.log("Error Fetching movies:", error);
      dispatch(changeErrorState(true));
    }
  }, [API, category, dispatch]);

  useEffect(() => {
    !moviesCategory && getMovies();
  }, [getMovies, moviesCategory]);
};

export default useMovies;