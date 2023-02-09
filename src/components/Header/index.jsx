import {BiSearchAlt2, BiCameraMovie} from 'react-icons/bi'
import * as C from './styles'

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Header = () => {

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        {!search &&
            alert('fill in the field')
        }

        navigate(`/search?q=${search}`)
        setSearch('')
    }

    return(
        <C.Container>
            <h1>
                <Link to='/'>Movie <BiCameraMovie /></Link>
            </h1>

            <C.FormArea onSubmit={handleSubmit}>
                <BiSearchAlt2 />
                <input 
                    type="text" 
                    placeholder='Search a movie...'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
            </C.FormArea>
        </C.Container>
    )
}