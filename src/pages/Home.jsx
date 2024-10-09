import React from 'react'

import { NavLink } from 'react-router-dom'

import './Home.css'

import ResponsiveMenu from '../components/ResponsiveMenu'
import Modal from '../components/Modal'

function Home() {
    return (
        <div>
            <header className='bg-body-tertiary'>
                <ResponsiveMenu />
                <Modal />
            </header>

        </div>
    )
}

export default Home