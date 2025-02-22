import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayMovies:null,
        trailerVideo:null,
        popularMovies:null,
        trendingMovies:null,
        upcomingMovies:null,
        advantureMovies:null,
        Action: null,
        Adventure: null,
        Animation: null,
        Crime: null,
        Comedy: null,
        Documentary: null,
        Drama: null,
        Family: null,
        Fantasy: null,
        History: null,
        Horror: null,
        Music: null,
        Mystery: null,
        Romance: null,
        "Science Fiction": null,
        "TV Movies": null,
        Thriller: null,
        War: null,
        Western: null,
    },
    reducers:{
        addNowPlayMovies:(state,action)=>{
            state.nowPlayMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        changeErrorState: (state, action) => {
            state.error = action.payload;
          },
          addMovies: (state, action) => {
            const { category, movies } = action.payload;
            state[category] = movies;
          },
    }
});

export const {addNowPlayMovies, addTrailerVideo, addPopularMovies,addTrendingMovies,addUpcomingMovies,addMovies,changeErrorState,}=moviesSlice.actions;
export default moviesSlice.reducer;