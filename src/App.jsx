import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"

import * as C from './App.styles'

const App = () => {
    return(
        <C.Container>
            <Header />

            <Outlet />
        </C.Container>
        
    )
}

export default App
