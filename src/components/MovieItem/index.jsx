import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa'

import * as C from './styles'

const imageURL =  'https://image.tmdb.org/t/p/w500/'

export const MovieItem = ({movie, showLink = true}) => {
    return(
        <C.Container>
                <img src={imageURL + movie.poster_path} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>
                    <FaStar /> {movie.vote_average}
                </p>
                {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </C.Container>
    )
}