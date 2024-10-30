import React from 'react'

import './Logo.css'

function Logo({ changeLogo }) {

    return (
        <div className='logo_container'>
            {changeLogo ? (
                <img className={`logo_company_on_hover`} src="blackLogo.svg" alt="" />
            ) : (
                <img className={`logo_company `} src="logoIcon.svg" alt="" />
            )
            }
        </div>
    )
}

export default Logo