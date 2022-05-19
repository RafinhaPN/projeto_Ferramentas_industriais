import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../components/servicos';
function Itens() {
    const [data, setData] = useState([])

    const [status, setStatus] = useState({
        
        type: '',
        msg: ''
    })

    async function Listar() {
        await api.get('/pastilha').then((response) => {
           // console.log(response.data);
            setData(response.data.pastilhas);
            setStatus({
                type: "success",
                msg: response.data.message,
            })
        }).catch((err) => {
            if (err.response) {
                setStatus({
                    type: "error",
                    msg: err.response.data.message,
                })
            } else {
                setStatus({
                    type: "error",
                    msg: "Error: Tente mais tarde !",
                })
            }
        })
    }

    useEffect(() => {
        Listar();
    }, [])


    return (
        <div className='bg-light'>
              <div className="alert " role="alert">
              {status.type==='error'?<h3>{status.msg}</h3> : ' '}
             
            </div>
            {data.map(itens => (
                <div key={itens._id}>
                    <div className="card text-white shadow-lg p-1 mb-1 bg-white rounded" style={{ maxwidth: "18rem" }}>
                        <div className="card border-light mb-3 text-center" style={{ maxwidth: "18rem" }}>
                            <div className="card-header bg-secondary text-center"><h3>{itens.Marca}</h3></div>
                            <div className="card-body text-black-50">
                                <h5 className="card-title">{itens.Descricao}</h5>
                                <p className="card-text">{itens.classe}</p>
                            </div>
                            <nav>
                                <Link to={'/detalhes/'+itens._id}>
                                    <button type="button" className="m-1  btn btn-outline-primary">Detalhes</button>
                                </Link>
                                <Link to='#'>
                                    <button type="button" className="m-1 btn btn-outline-success">Editar</button>
                                </Link>
                                <Link to='#'>
                                    <button type="button" className="m-1 btn btn-outline-danger">Apagar</button>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Itens;