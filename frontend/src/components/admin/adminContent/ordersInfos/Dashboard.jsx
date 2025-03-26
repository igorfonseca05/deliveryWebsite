import React from 'react';
import './Dashboard.css'; // Arquivo de estilo para personalização

const Dashboard = ({ data }) => {
    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">Painel de Controle</h2>
            <div className="dashboard-cards">
                <div className="dashboard-card total-orders">
                    <div className="dashboard-icon">
                        <i className="fas fa-box"></i> {/* Ícone de pedidos */}
                    </div>
                    <div className="dashboard-info">
                        <h3>Total de Pedidos</h3>
                        <p className="dashboard-count">{data.totalOrders}</p>
                    </div>
                </div>
                <div className="dashboard-card total-customers">
                    <div className="dashboard-icon">
                        <i className="fas fa-users"></i> {/* Ícone de clientes */}
                    </div>
                    <div className="dashboard-info">
                        <h3>Total de Clientes</h3>
                        <p className="dashboard-count">{data.totalCustomers}</p>
                    </div>
                </div>
                <div className="dashboard-card in-progress">
                    <div className="dashboard-icon">
                        <i className="fas fa-cogs"></i> {/* Ícone de pedidos em andamento */}
                    </div>
                    <div className="dashboard-info">
                        <h3>Pedidos em Andamento</h3>
                        <p className="dashboard-count">{data.inProgress}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
