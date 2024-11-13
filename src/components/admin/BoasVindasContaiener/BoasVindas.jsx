import "./BoasVindas.css"

import React from 'react'

function BoasVindas({ adminName }) {
    return (
        <div className="admin_container">
            <h1 className="saudação_text">Bem vindo {adminName}</h1>
            <p>Confira os dados mais recentes e mantenha tudo sob controle.</p>
        </div>
    )
}

export default BoasVindas