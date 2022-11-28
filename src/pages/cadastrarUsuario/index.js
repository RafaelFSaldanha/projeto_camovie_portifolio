import './index.scss'
import { Link } from 'react-router-dom'

export default function Index() {

    return (
        <main className='cadastrarUsuario'>
            <div className='detalheCima'></div>
            <div className='divCadastro'>
                <h1 className='tituloCadastro'> Cadastro </h1>
                <div className='divInputs'>
                    <div className='inputGroup'>
                        <input type='text' className='input' placeholder= " " />
                        <label className='placeholder'> Nome </label>
                    </div>
                    <div className='inputGroup'>
                        <input type='text' className='input' placeholder= " " />
                        <label className='placeholder'> Email </label>
                    </div>
                    <div className='inputGroup'>
                        <input type='password' className='input' placeholder= " " />
                        <label className='placeholder'> Senha </label>
                    </div>
                </div>
                <button className='botaoCadastrar' > <Link to="/home"> Cadastrar </Link></button>
                <p className='pBaixo'> Já possue uma conta? <Link to='/login' className='aPBaixo'> Entrar </Link></p>
            </div>
            <div className='detalheBaixo'></div>
        </main>
    )
}