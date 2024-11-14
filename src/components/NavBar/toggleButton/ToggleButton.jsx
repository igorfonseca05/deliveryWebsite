import { useState } from 'react'
import './ToggleButton.css'


function ToggleButton() {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar o toggle

    // Função para alternar o estado
    const handleToggle = () => {
        setIsOpen(!isOpen);
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