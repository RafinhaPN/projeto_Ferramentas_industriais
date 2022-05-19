import React from 'react';
import Menu from '../../../components/Menu'

function Home() {
  return (
    <div className="container">
      <div className="shadow p-1 mb-1 bg-white rounded">
        <Menu />
      </div>
      <div className="shadow-sm p-1 mb-5 bg-white rounded">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Pastilhas Industriais</h1>
            <p className="lead">Nós temos a solução para seu problema!</p>
          </div>
        </div>
      </div>
   </div>
  )
}
export default Home;


