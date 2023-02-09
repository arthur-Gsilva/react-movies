import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill, } from "react-icons/bs";
import { MovieItem } from "../../components/MovieItem";

import * as C from './styles'

const moviesURL = 'https://api.themoviedb.org/3/movie/'
const apiKey = 'api_key=61305d71dce7b6f6dbb88e02b48828f3'

export const Movie = () => {

    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {
        const response = await fetch(url)
        const data = await response.json()

        setMovie(data)
    }

    useEffect(() => {
        const movieURL = `${moviesURL}${id}?${apiKey}`

        getMovie(movieURL)
    }, [])

    return(
        <C.Container>
            {movie && 
                <>
                    <MovieItem movie={movie} showLink={false}/>
                    <p>{movie.tagline}</p>

                    <h4>synopsis:</h4>
                    <p>{movie.overview}</p>

                    <h4>Duration:</h4>
                    <p>{movie.runtime} min</p>
                </>
            }
        </C.Container>
    )
}