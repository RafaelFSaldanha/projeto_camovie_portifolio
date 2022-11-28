import './index.scss'
import Menu from '../../components/menu/index.js'
import Cabecalho from '../../components/cabecalho/index.js'
import Upload from '../../assets/images/upload.png'

export default function Index() {
    
    return (
        <main className='cadastrarFilme'>
            <Menu selecionado='cadastrar' />
            <div className='divPrincipal'>
                <Cabecalho />
                <div className='divCadastrar'>
                    <div className='divCadastro'>
                        <h1 className='h1Cadastrar'> Cadastrar Filme </h1>
                        <div className='div1'>
                            <div className='divUpload'>
                                <img src={Upload} alt="" />
                                <input type='file' id='imagemCapa'/>
                            </div>
                            <div className='div2'>
                                <div className='divInputs'>
                                    Nome: <input className='inputNome' type='text' placeholder='Nome do Filme' />
                                </div>
                                <div className='divInputs'>
                                    Lançamento: <input className='input' type='date' />
                                </div>
                                <div className='divInputs'>
                                    Avaliação: <input className='inputAvaliacao' type='number' />
                                </div>
                                <div className='divInputs'>
                                    <input className='inputCheckbox' type='checkbox' /> Disponível
                                </div>
                            </div>
                            <div className='div3'>
                                Sinopse: <textarea className='inputSinopse' type='text' placeholder='Sinopse do Filme' />
                            </div>
                        </div>
                        <div className='divBotoes'>
                            <button className='botaoCadastrar' > Novo </button>
                            <button className='botaoCadastrar' > Cadastrar </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}