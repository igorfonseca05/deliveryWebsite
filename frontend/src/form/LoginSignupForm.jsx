import React, { useState } from 'react';
import './LoginSignupForm.css';

function LoginSignupForm() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="form-container">
            <div className={`form ${isLogin ? 'login-mode' : 'signup-mode'}`}>
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

                <form>
                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>

                    <button type="submit" className="submit-btn">
                        {isLogin ? 'Login' : 'Create Account'}
                    </button>
                </form>

                <p className="toggle-text">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <span onClick={toggleForm} className="toggle-link">
                        {isLogin ? 'Sign Up' : 'Login'}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default LoginSignupForm;
