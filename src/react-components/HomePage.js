// React Component for Home Page.

import React from 'react';
import logo from '../photos/cczalogo.png';
import '../styles/HomePage.css';

export default function HomePage()
{
    return (
        <section id='homepage' className='homepage-container'>
            <section id='navlogo' className='nav-and-logo-container'>
                <section id='infotext' className='info-text-container'>
                    <a href='#infopage' className='info-text'>INFO</a>
                </section>
                <section id='logo' className='logo-container'>
                    <img src={logo} className='logo'/>
                </section>
            </section>
        </section>
    );
}