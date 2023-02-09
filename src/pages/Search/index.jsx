import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { MovieItem } from '../../components/MovieItem'
import * as C from '../Home/styles'


const searchURL = 'https://api.themoviedb.org/3/search/movie/'
const apiKey = 'api_key=61305d71dce7b6f6dbb88e02b48828f3'

export const Search = () => {

    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState('')
    const query = searchParams.get('q')


    const getSearchedMovie = async (url) => {
        const response = await fetch(url)
        const data = await response.json()

        setMovies(data.results)
    }

    useEffect(() => {
        const searchMovieURL = `${searchURL}?${apiKey}&query=${query}`

        getSearchedMovie(searchMovieURL)
    }, [query])


    return(
        <C.Container>
            <h2>Results for: <span id='query'>{query}</span></h2>

            <C.MoviesContainer>
                {!movies && <p>Carregando...</p>}
                {movies && movies.map((movie) => <MovieItem key={movie.id} movie={movie}/>)}
            </C.MoviesContainer>
        </C.Container>
    )
}