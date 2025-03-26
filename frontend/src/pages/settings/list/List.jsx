import React, { useState, useEffect } from "react";
import "./List.css"; // Usando o CSS fornecido

const ItemList = ({ data }) => {
    if (!data) return
    const [items, setItems] = useState(data);
    const [editingId, setEditingId] = useState(null); // ID do item sendo editado

    // Função para atualizar os valores
    const handleEdit = (id, field, value) => {
        const updatedItems = items.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
        );
        setItems(updatedItems);
    };

    // Função para sair do modo de edição ao clicar fora
    const handleClickOutside = (event) => {
        // Se clicarmos fora do item sendo editado, sair do modo de edição
        if (!event.target.closest(".list-row.editing")) {
            setEditingId(null);
        }
    };

    // Adiciona o listener ao documento para detectar cliques fora
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="item-list">
            <div className="list-header">
                <span>Image</span>
                <span>Name</span>
                <span>Category</span>
                <span>Price</span>
                <span>Actions</span>
            </div>
            {items.map((item) => (
                <div
                    className={`list-row ${editingId === item.id ? "editing" : ""}`}
                    key={item.id}
                    onClick={() => setEditingId(item.id)}
                >
                    <div className="list-cell image-cell">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="item-image"
                        />
                    </div>

                    <div className="list-cell">
                        {editingId === item.id ? (
                            <input
                                type="text"
                                value={item.name}
                                onChange={(e) => handleEdit(item.id, "name", e.target.value)}
                            />
                        ) : (
                            <span>{item.name}</span>
                        )}
                    </div>

                    <div className="list-cell">
                        {editingId === item.id ? (
                            <input
                                type="text"
                                value={item.category}
                                onChange={(e) =>
                                    handleEdit(item.id, "category", e.target.value)
                                }
                            />
                        ) : (
                            <span>{item.category}</span>
                        )}
                    </div>

                    <div className="list-cell">
                        {editingId === item.id ? (
                            <input
                                type="number"
                                step="0.01"
                                value={item.price}
                                onChange={(e) => handleEdit(item.id, "price", e.target.value)}
                            />
                        ) : (
                            <span>R${item.price}</span>
                        )}
                    </div>

                    <div className="list-cell actions">
                        {editingId === item.id ? (
                            <button onClick={() => setEditingId(null)}>Save</button>
                        ) : (
                            <>
                                <button onClick={() => setEditingId(item.id)}>Edit</button>
                                <button onClick={() => alert(`Delete ${item.name}`)}>
                                    Delete
                                </button>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
