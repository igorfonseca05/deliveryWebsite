import React from 'react'
import "./Modal.css"

function Modal() {
    return (
        <>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form class="form modal-body">
                            <p class="title">Register </p>
                            <p class="message">Signup now and get full access to our app. </p>
                            <div class="flex">
                                <label>
                                    <input required="" placeholder="" type="text" class="input" />
                                    <span>Firstname</span>
                                </label>

                                <label>
                                    <input required="" placeholder="" type="text" class="input" />
                                    <span>Lastname</span>
                                </label>
                            </div>

                            <label>
                                <input required="" placeholder="" type="email" class="input" />
                                <span>Email</span>
                            </label>

                            <label>
                                <input required="" placeholder="" type="password" class="input" />
                                <span>Password</span>
                            </label>
                            <label>
                                <input required="" placeholder="" type="password" class="input" />
                                <span>Confirm password</span>
                            </label>
                            <button class="submit">Submit</button>
                            <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
                        </form>
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