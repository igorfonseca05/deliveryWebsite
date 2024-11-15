import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="status-dropdown">
            <div className="status-indicator" >
                {/* <span className="status-circle"></span> */}
                <span className="status-label">Fechado</span>
                <span className="material-symbols-outlined arrow" onClick={toggleDropdown}>keyboard_arrow_down</span>
            </div>
            {isOpen && <div className="dropdown-menu ">

                <div className="scroll-bar dropdown-content ">
                    <h3>Horário de funcionamento</h3>
                    <hr />
                    <ul className="schedule-list">
                        <li><strong>Segunda-feira:</strong> 10:40 às 14:00</li>
                        <li><strong>Terça-feira:</strong> 10:40 às 14:00</li>
                        <li><strong>Quarta-feira:</strong> 10:50 às 14:00</li>
                        <li><strong>Quinta-feira:</strong> 10:40 às 14:00</li>
                        <li><strong>Sexta-feira:</strong> 10:45 às 14:00</li>
                        <li><strong>Sábado:</strong> 10:50 às 15:00</li>
                        <li><strong>Domingo:</strong> 10:40 às 15:00</li>
                    </ul>
                </div>

            </div>}
        </div>
    );
};

export default Dropdown;
