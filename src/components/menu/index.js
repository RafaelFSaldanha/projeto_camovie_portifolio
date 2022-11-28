import './index.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo-Camovie.png'
import Home from '../../assets/images/home.png'
import Cadastrar from '../../assets/images/cadastrar.png'
import Consultar from '../../assets/images/consultar.png'
import Sair from '../../assets/images/sair.png'

export default function Index() {

    return (
        <main className='menuLateral'>
            <img className='logoCamovie' src={Logo} alt="Camovie" />
            <div className='divBotoes'>
                <Link to='/home'>
                    <img className='imgBotao' src={Home} alt='Home' />
                    <p className='pBotao'> Home </p>
                </Link>
                <Link to='/cadastrar/filme'>
                    <img className='imgBotao' src={Cadastrar} alt='Cadastrar' />
                    <p className='pBotao'> Cadastrar </p>
                </Link>
                <Link to='/consultar/filme'>
                    <img className='imgBotao' src={Consultar} alt='Consultar' />
                    <p className='pBotao'> Consultar </p>
                </Link>
            </div>
            <button className='botaoSair'>
                <img src={Sair} alt="Sair" />
                <p className='pSair'> <Link to="/"> Sair </Link></p>
            </button>
        </main>
    )
}