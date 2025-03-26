import React from 'react'

import './Logo.css'

function Logo({ changeLogo }) {

    return (
        <div className='logo_container'>
            <img
                className={`logo_company_on_hover`}
                style={{
                    opacity: `${changeLogo ? '1' : '0'}`,
                    transition: 'opacity 0.1s 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)'
                }}
                src="blackLogo.svg"
                alt="" />
            <img
                className={`logo_company `}
                style={
                    {
                        opacity: `${changeLogo ? '0' : '1'}`,
                        transition: 'opacity 0.1s 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)'
                    }}
                src="logoIcon.svg"
                alt="" />
        </div>
    )
}

export default Logo