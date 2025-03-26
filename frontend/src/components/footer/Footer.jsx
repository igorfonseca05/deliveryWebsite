import React from "react";
import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>Endereço</h4>
                    <p>Rua Eroni dos Santos Goulart, 24</p>
                    <p>Jardim Paraíso, Cruzeiro - SP</p>
                    <p>CEP: 12721-295</p>
                </div>
                <div className="footer-column">
                    <h4>Outras informações</h4>
                    {/* <p>CNPJ: 45.217.680/0001-38</p> */}
                    <p>
                        Site desenvolvido por  Aurélio, Igor, José e Telma.
                    </p>
                    <p>Projeto: Paraíso da Gastronomia</p>
                </div>
                <div className="footer-column">
                    <p>&copy; {currentYear} Paraíso da Gastronomia</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
