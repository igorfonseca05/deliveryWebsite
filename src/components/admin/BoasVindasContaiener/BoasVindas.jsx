import "./BoasVindas.css"

import React from 'react'

function BoasVindas({ adminName }) {
    return (
        <div className="admin_container">
            <div className="saudação_text">
                <h1>Bem vindo {adminName}</h1>
                <p>Confira os dados mais recentes e mantenha tudo sob controle.</p>
            </div>
            <div className="adm_infos">
                <div className="dash">dash

                </div>
            </div>
        </div>
    )
}

export default BoasVindas