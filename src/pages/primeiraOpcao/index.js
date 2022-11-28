import './index.scss'
import logoCamovie from '../../assets/images/logo-Camovie.png'
import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <main className='primeiraOpcao'>
            <div className='detalheCima'></div>
            <div className='divOpcoes'>
                <div className='titulo'>
                    <img className='logo' src={logoCamovie} alt='logo Camovie' />
                    <h1 className='tituloOpcao1'> Seja bem-vindo ao Camovie</h1>
                </div>
                <h1 className='tituloOpcao2'> O que deseja fazer? </h1>
                <Link to='/login'>
                    <button className='opcoes'>
                        Entrar
                    </button>
                </Link>
                <Link to='/cadastro'>
                    <button className='opcoes'>
                        Cadastrar-me
                    </button>
                </Link>
            </div>
            <div className='detalheBaixo'></div>
        </main>
    )
}