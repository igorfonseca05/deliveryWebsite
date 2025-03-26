import React from 'react'
import './Settings.css'
import { useFetch } from '../../hooks/UseFetch'
import List from './list/List'

function Settings() {

    const { data, loading } = useFetch('http://localhost:3000/cardapio')

    return (
        <div className='section_settings'>
            <h1>Editar Pratos</h1>
            <div className='list-itens'>
                {loading ?
                    <p>Carregando...</p> :
                    <List data={data ? data : null} />}
            </div>
        </div>
    )
}

export default Settings