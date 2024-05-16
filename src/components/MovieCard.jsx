import React from 'react';

function MovieCard({ poster_path, title, name }) {
  return (
    <div className='m-4'>
      <div 
        className='h-[30vh] relative w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end'
        style={{ backgroundImage: `url(${poster_path})` }}
      >
        <div className='bg-black absolute bottom-0 bg-opacity-50 w-full p-2 text-white rounded-b-xl text-center'>
          <h3 className='text-sm font-bold'>{title || name}</h3>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
