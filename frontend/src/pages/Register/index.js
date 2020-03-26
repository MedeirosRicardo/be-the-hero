import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Register</h1>
                    <p>
                        Register to help people find incidents in your NGO.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Back to Home
                    </Link>
                </section>

                <form>
                    <input placeholder="NGO Name" />
                    <input type="email" placeholder="Email" />
                    <input placeholder="Phone" />

                    <div className="input-group">
                        <input placeholder="City" />
                        <input placeholder="Prov" style={{ width: 90 }} />
                    </div>

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}