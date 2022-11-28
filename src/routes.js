import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrimeiraOpcao from './pages/primeiraOpcao'
import CadastrarUsuario from './pages/cadastrarUsuario'
import Login from './pages/loginUsuario'
import Home from './pages/home'
import CadastrarFilme from './pages/cadastrarFilme'
import ConsultarFilme from './pages/consultarFilme'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PrimeiraOpcao />} />
                <Route path='/cadastro' element={<CadastrarUsuario />} />
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/cadastrar/filme' element={<CadastrarFilme />} />
                <Route path='/alterar' element={<CadastrarFilme />} />
                <Route path='/consultar/filme' element={<ConsultarFilme />} />
            </Routes>
        </BrowserRouter>
    )
}
