import React from 'react'
import "./Modal.css"

function Modal() {
    return (
        <>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Criar Conta</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="form-box modal-body">
                            <form class="form">
                                <span class="title">Cadastrar</span>
                                <span class="subtitle">Crie uma conta grátis com seu email.</span>
                                <div class="form-container">
                                    <input type="text" class="input" placeholder="Nome completo" />
                                    <input type="email" class="input" placeholder="Email" />
                                    <input type="password" class="input" placeholder="Senha" />
                                </div>
                                <button>Cadastrar</button>
                            </form>
                            <div class="form-section">
                                <p>Já tem uma conta? <a href="">Entrar</a> </p>
                            </div>
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal