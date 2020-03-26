import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            phone,
            city,
            state
        };

        try {
            const response = await api.post('ngo', data);
    
            alert(`Your access ID: ${response.data.id}`);
            history.push('/');
        } catch (err) {
            alert(`Error, try again.`);
        }
    }

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

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="NGO Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                        placeholder="Phone" 
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="City" 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="Prov"
                            style={{ width: 90 }} 
                            value={state}
                            onChange={e => setState(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}