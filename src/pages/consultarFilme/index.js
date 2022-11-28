import './index.scss'
import Menu from '../../components/menu'
import Cabecalho from '../../components/cabecalho'
import Buscar from '../../assets/images/busca.png'

export default function Index() {
    return (
        <main className='page page-consultar'>
            <Menu selecionado='consultar' />
            <div className='container'>
                <Cabecalho />
                <div className='conteudo'>
                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar filmes por nome'/>
                        <img className='imgBuscar' src={Buscar} alt='buscar'/>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>IDENTIFICAÇÃO</th>
                                <th>FILME</th>
                                <th>AVALIAÇÃO</th>
                                <th>LANÇAMENTO</th>
                                <th>DISPONÍVEL</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#1</td>
                                <td> Alladin </td>
                                <td> 10.0 </td>
                                <td> 10/10/2010 </td>
                                <td> SIM </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>#2</td>
                                <td> Alladin </td>
                                <td> 10.0 </td>
                                <td> 10/10/2010 </td>
                                <td> SIM </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>#3</td>
                                <td> Alladin </td>
                                <td> 10.0 </td>
                                <td> 10/10/2010 </td>
                                <td> SIM </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>#4</td>
                                <td> Alladin </td>
                                <td> 10.0 </td>
                                <td> 10/10/2010 </td>
                                <td> SIM </td>
                                <td>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}