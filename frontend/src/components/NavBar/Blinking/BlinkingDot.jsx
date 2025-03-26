import React, { useState } from 'react';
import './BlinkingDot.css'; // Arquivo CSS

import Dropdown from '../../dropDown/DropDown';

function BlinkingDot() {
    const [isGreen, setIsGreen] = useState(false);

    // Alternar cor
    const toggleColor = () => {
        setIsGreen((prev) => !prev);
    };

    return (
        <div className='blinking_container'>
            {/* Bolinha com classes dinâmicas */}
            <div className={`dot ${isGreen ? 'green' : 'red'}`}></div>
            <Dropdown />
        </div>
    );
}

export default BlinkingDot;
