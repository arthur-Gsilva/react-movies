import { useEffect, useState } from "react"
import { MovieItem } from "../../components/MovieItem"
import * as C from './styles'

const moviesURL = 'https://api.themoviedb.org/3/movie/'
const apiKey = 'api_key=61305d71dce7b6f6dbb88e02b48828f3'

export const Home = () => {

    const [topMovies, setTopMovies] = useState([])

    const getTopMovie = async (url) => {
        const response = await fetch(url)
        const data = await response.json()

        setTopMovies(data.results)
    }

    useEffect(() => {
        const topMovieURL = `${moviesURL}top_rated?${apiKey}`

        getTopMovie(topMovieURL)
    }, [])

    return(
        <C.Container>
            <h2>The best Movies</h2>

            <C.MoviesContainer>
                {!topMovies && <p>Carregando...</p>}
                {topMovies && topMovies.map((movie) => <MovieItem key={movie.id} movie={movie}/>)}
            </C.MoviesContainer>
        </C.Container>
    )
}