import React from 'react'

import './NewDish.css'
import AddDishForm from './addDishForm/addDishForm'

function NewDish() {

    const handleAddDish = (newDish) => {
        console.log("Novo prato adicionado:", newDish);
        // Aqui você pode salvar no banco ou atualizar o estado
    };

    return (
        <div className='section_container'>
            {/* <h1>novo prato</h1> */}
            <div className='dish_form_container'>
                <AddDishForm onAddDish={handleAddDish} />
            </div>
        </div>
    )
}

export default NewDish