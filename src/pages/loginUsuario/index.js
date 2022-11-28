import './index.scss'
import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <main className='loginUsuario'>
            <div className='detalheCima'></div>
            <div className='divLogin'>
                <h1 className='tituloLogin'> Login </h1>
                <div className='inputGroup'>
                    <input type='text' className='input' placeholder=" " />
                    <label className='placeholder'> Email </label>
                </div>
                <div className='inputGroup'>
                    <input type='password' className='input' placeholder=" " />
                    <label className='placeholder'> Senha </label>
                </div>
            </div>
            <button className='botaoLogar'> <Link to="/home"> Entrar </Link></button>
            <p className='pBaixo'> Ainda não possue uma conta? <Link to='/cadastro' className='aPBaixo'> Cadastrar-me </Link></p>
            <div className='detalheBaixo'></div>
        </main>
    )
}