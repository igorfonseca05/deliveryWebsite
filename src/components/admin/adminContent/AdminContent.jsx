import "./AdminContent.css"

import React from 'react'

import OrderDashboard from "./orderDashboard/OrderDashboard";

function AdminContent({ adminName }) {

    const orders = [
        {
            id: 1,
            customer: "Igor Fonseca",
            items: [
                { name: "Strogonoff de Frango", quantity: 1 },
                { name: "Suco de Laranja", quantity: 2 },
            ],
            total: 48.00,
            status: "Concluído",
            date: "2024-11-14",
        },
        {
            id: 2,
            customer: "Maria Souza",
            items: [{ name: "Pizza Margherita", quantity: 1 }],
            total: 35.50,
            status: "Pendente",
            date: "2024-11-13",
        },
        {
            id: 3,
            customer: "Carlos Almeida",
            items: [
                { name: "Hambúrguer", quantity: 2 },
                { name: "Coca-Cola", quantity: 1 },
            ],
            total: 72.30,
            status: "Cancelado",
            date: "2024-11-12",
        },
    ];

    return (
        <div className="admin_container">
            <div className="saudação_text">
                <h1>Bem vindo {adminName}</h1>
                <p>Confira os dados mais recentes e mantenha tudo sob controle.</p>
            </div>
            <div className="dashboard-container">
                <div className="dash dash-blue">
                    N° Pedidos/mês
                </div>
                <div className="dash dash-red">Dash 2</div>
                <div className="dash dash-green">Dash 3</div>
                <div className="dash dash-yellow">Dash 4</div>
                <div className="dash dash-purple">Dash 5</div>
            </div>
            <div>
                <OrderDashboard orders={orders} />
            </div>

        </div>
    )
}

export default AdminContent