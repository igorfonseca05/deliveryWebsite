import React from 'react';
import './OrderHistory.css'; // Arquivo de estilo para personalização

const OrderHistory = ({ orders }) => {
    return (
        <div className="order-history-container">
            <h2 className="order-history-title">Seus Pedidos Realizados</h2>
            <div className="order-list">
                {orders.length === 0 ? (
                    <p className="no-orders">Você ainda não realizou nenhum pedido.</p>
                ) : (
                    orders.map((order, index) => (
                        <div className="order-card" key={index}>
                            <div className="order-header">
                                <p className="order-id">Pedido #{order.id}</p>
                                <p className="order-date">{order.date}</p>
                            </div>
                            <div className="order-content">
                                <div className="order-image">
                                    <img src={order.imageUrl} alt={`Prato do pedido ${order.id}`} />
                                </div>
                                <div className="order-details">
                                    <p className="order-name">{order.items.join(', ')}</p>
                                </div>
                                <div className="order-price">
                                    <p className="order-total">R${order.total}</p>
                                </div>
                                <div className="order-status">
                                    <span className={`status ${order.status.toLowerCase()}`}>
                                        {order.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default OrderHistory;
