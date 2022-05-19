import React from 'react';
import Menu from '../../../components/Menu'
import Itens from '../../../components/Itens'

function Listar() {
    return (
        <div className="container">
            <div className="shadow p-1 mb-1 bg-white rounded">
                <Menu />
            </div>
            <div className="shadow-sm p-1 mb-1 bg-white rounded">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-2">Listar Pastilhas</h1>
                        <p className="lead">produtos de qualidade!</p>
                    </div>
                </div>
                <Itens />
            </div>
        </div>
    )
}
export default Listar;
