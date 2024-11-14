import "./BoasVindas.css"

import React from 'react'

function BoasVindas({ adminName }) {
    return (
        <div className="admin_container">
            <div className="saudação_text">
                <h1>Bem vindo {adminName}</h1>
                <p>Confira os dados mais recentes e mantenha tudo sob controle.</p>
            </div>
            <div class="dashboard-container">
                <div class="dash dash-blue">
                    N° Pedidos/mês
                </div>
                <div class="dash dash-red">Dash 2</div>
                <div class="dash dash-green">Dash 3</div>
                <div class="dash dash-yellow">Dash 4</div>
                <div class="dash dash-purple">Dash 5</div>
            </div>

        </div>
    )
}

export default BoasVindas