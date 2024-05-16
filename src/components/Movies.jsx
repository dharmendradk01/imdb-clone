// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'; // Assuming you have a MovieCard component

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://ott-details.p.rapidapi.com/advancedsearch', {
          params: {
            start_year: 1970,
            end_year: 2020,
            min_imdb: 6,
            max_imdb: 7.8,
            genre: 'action',
            language: 'english',
            type: 'movie',
            sort: 'latest',
            page: 1,
          },
          headers: {
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
            'X-RapidAPI-Key': '8a92120866mshb9ae1e8d7e7e006p19467ejsnf2b9b6e16f42'
          }
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching the movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center'>
        Trending Movies
      </div>
      <div className='flex flex-row flex-wrap justify-around'>
        {movies.map((movieObj) => (
          <MovieCard key={movieObj.imdbid} poster_path={movieObj.imageurl[0]} title={movieObj.title} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
