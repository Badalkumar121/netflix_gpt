
import React from 'react'
import { Link } from 'react-router-dom'

const VideoTitle = ({ movieId, title, overview }) => {
  return (
    <div className='pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold'>{title}</h1>
        <p className='hidden md:block py-6 text-lg w-full md:w-1/2'>{overview}</p>
        <div className='my-4 md:m-0 flex flex-col md:flex-row md:items-center'>
            {/* Play Button */}
            <Link to={`/movie/${movieId}`}>
                <button className="bg-white text-black py-1 md:py-4 px-3 md:px-14 text-lg md:text-xl rounded-md hover:bg-opacity-80 mb-4 md:mb-0">
                    ➤ Play
                </button>
            </Link>
            {/* More Info Button */}
            <button className="hidden md:inline-block mx-3 bg-slate-600 text-white p-4 px-14 text-xl rounded-md bg-opacity-50">
                ⓘ More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;

