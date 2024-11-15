import { useEffect, useState } from 'react'
import './ToggleButton.css'

import { useAuthContext } from '../../../context/userAuthContext';
import { useDataBase } from '../../../hooks/useRealTimeDatabase';

function ToggleButton() {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar o toggle

    const { user } = useAuthContext()
    const { update } = useDataBase()

    const handleToggle = () => {
        setIsOpen(!isOpen)
        update(user.uid, isOpen)
    };


    return (
        <div className="toggle-switch-container">
            <span
                className="status-text"
                style={{ color: isOpen ? "#28a745" : "#dc3545" }}
            >
                {isOpen ? "Aberto" : "Fechado"}
            </span>
            <label className="toggle-switch">
                <input type="checkbox" checked={isOpen} onChange={handleToggle} />
                <span className="slider"></span>
            </label>
        </div>
    );
}

export default ToggleButton