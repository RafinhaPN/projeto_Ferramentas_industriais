import React, { useEffect, useState } from 'react';
import Menu from '../../../components/Menu'
import api from '../../../components/servicos'
import { useParams } from 'react-router-dom'

function Visualizar() {
    const { id } = useParams();
   // console.log(id);
    const [data, setData] = useState([]);

    async function Detalhes() {
        await api.get('/pastilha/' + id).then((response) => {
           // console.log(response.data.pastilha);
            setData(response.data.pastilha);
        }).catch((err)=>{
            
        })
    }

    useEffect(() => {
        Detalhes();
    }, [])




    return (
        <div className="container">
            <div className="shadow p-1 mb-1 bg-white rounded">
                <Menu />
            </div>
            <div className="shadow-sm p-1 mb-5 bg-white rounded">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Pastilha</h1>
                        <p className="lead">Detalhe!</p>
                    </div>
                </div>
                <div className="card text-white shadow-lg p-1 mb-1 bg-white rounded" style={{ maxwidth: "18rem" }}>
                    <div className="card border-light mb-3 text-center" style={{ maxwidth: "18rem" }}>
                        <div className="card-header bg-secondary text-center"><h3>{data.Descricao}</h3></div>
                        <div className="card-body text-black-50">
                            <h5 className="card-title">TIPO:{"  "}{data.tipo}</h5>
                            <p className="card-text">Quantidade:{"  "}{data.quantidade}</p>
                            <p className="card-text">Caixa:{"  "} {data.caixa}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Visualizar;
