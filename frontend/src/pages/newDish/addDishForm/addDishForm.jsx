import React, { useState } from "react";
import "./AddDishForm.css";

const AddDishForm = () => {
    const [formData, setFormData] = useState({
        name: "Título do Prato",
        category: "Categoria",
        description: "Descrição do prato",
        price: "0.00",
        image:
            "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=", // URL genérica
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Prato adicionado com sucesso!");
        console.log("Dados enviados:", formData);
    };

    return (
        <div className="form-and-preview">
            {/* Formulário */}
            <form className="add-dish-form" onSubmit={handleSubmit}>
                <h1>Adicionar Novo Prato</h1>

                <label>
                    Nome do Prato*:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ex: Strogonoff de Frango"
                        required
                    />
                </label>

                <label>
                    Categoria:
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="Ex: Cardápio do Dia"
                    />
                </label>

                <label>
                    Descrição:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Descreva o prato"
                    ></textarea>
                </label>

                <label>
                    Preço* (R$):
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        step="0.01"
                        placeholder="Ex: 18.00"
                        required
                    />
                </label>

                <label>
                    URL da Imagem*:
                    <input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Ex: https://exemplo.com/imagem.jpg"
                        required
                    />
                </label>

                <button type="submit">Adicionar Prato</button>
            </form>

            {/* Pré-visualização */}
            <div className="dish-preview">
                <div className="preview-card">
                    <img
                        src={formData.image}
                        alt="Pré-visualização do Prato"
                        className="preview-image"
                    />
                    <div className="preview-details">
                        <h2>{formData.name}</h2>
                        {/* <p className="preview-category">{formData.category}</p> */}
                        <p className="preview-description">{formData.description}</p>
                        <div className="price_and_cart_container">
                            <p className="preview-price">R${parseFloat(formData.price).toFixed(2)}</p>
                            <button onClick={() => setCartProductId(id)}><span className="mdi mdi-cart-plus"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDishForm;
