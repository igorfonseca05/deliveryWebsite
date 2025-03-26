import React from "react";
import "./OrderDashboard.css"; // Arquivo de estilos

const OrderDashboard = ({ orders }) => {
    return (
        <div className="Order-dashboard-container">
            <h2>Detalhes dos Pedidos</h2>
            <div className="dashboard-table">
                <div className="dashboard-header">
                    <div>Número do Pedido</div>
                    <div>Cliente</div>
                    <div>Itens</div>
                    <div>Total (R$)</div>
                    <div>Status</div>
                    <div>Data</div>
                </div>
                {orders.length > 0 ? (
                    orders.map((order) => (
                        <div key={order.id} className="dashboard-row">
                            <div>{order.id}</div>
                            <div>{order.customer}</div>
                            <div>
                                {order.items.map((item, index) => (
                                    <p key={index}>
                                        {item.quantity}x {item.name}
                                    </p>
                                ))}
                            </div>
                            <div>{order.total.toFixed(2)}</div>
                            <div>
                                <span
                                    className={`status-badge ${order.status.toLowerCase() === "concluído"
                                        ? "success"
                                        : order.status.toLowerCase() === "pendente"
                                            ? "warning"
                                            : "error"
                                        }`}
                                >
                                    {order.status}
                                </span>
                            </div>
                            <div>{new Date(order.date).toLocaleDateString()}</div>
                        </div>
                    ))
                ) : (
                    <div className="no-orders">Nenhum pedido realizado ainda.</div>
                )}
            </div>
        </div>
    );
};

export default OrderDashboard;
