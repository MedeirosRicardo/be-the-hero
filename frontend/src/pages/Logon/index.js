import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form>
                    <input placeholder="Youor ID" />
                    <button className="button" type="submit">Enter</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Create an Account
                    </a>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}