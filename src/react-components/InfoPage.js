// React Component for Info page.

import React from 'react';
import '../styles/InfoPage.css';
import clogo          from '../photos/c.png';
import cpplogo        from '../photos/c++.png';
import cmakelogo      from '../photos/cmake.png';
import pythonlogo     from '../photos/python.png';
import javascriptlogo from '../photos/javascript.png';
import reactlogo      from '../photos/react.png';
import reduxlogo      from '../photos/redux.png';
import rustlogo       from '../photos/rust.png';
import htmllogo       from '../photos/html5.png';
import sqllogo        from '../photos/postgresql.png';
import sasslogo       from '../photos/sass.png';
import gitlogo        from '../photos/git.png';
import nodejslogo     from '../photos/nodejs.png';
import bootstraplogo  from '../photos/bootstrap.png';
import csslogo        from '../photos/css.png';
import githublogo     from '../photos/github.png';
import linkedinlogo   from '../photos/linkedin.png';

export default function InfoPage()
{
    return (
        <section id='infopage' className='infopage-container'>
            <section>
                <section id='infopage-title' className='infopage-title-container'>
                    <p className='square'></p>
                    <section className='name-major-container'>
                        <p className='name-text'>CARLOS CARRANZA</p>
                        <p>BS, Computer Science</p>
                    </section>
                </section>
                <section className='skills-logos-contact-container'>
                    <section id='skills' className='skills-container'>
                        <p className='info-subtitle'>SKILLS:</p>
                        <p>C</p>
                        <p>C++</p>
                        <p>JavaScript</p>
                        <p>jQuery</p>
                        <p>CSS</p>
                        <p>Git</p>
                        <p>GitHub</p>
                        <p>Sass</p>
                        <p>HTML</p>
                        <p>Rust</p>
                        <p>Python</p>
                        <p>CMake</p>
                        <p>PostgreSQL</p>
                        <p>React</p>
                        <p>Node.js</p>
                        <p>Redux</p>
                        <p>Bootstrap</p>
                        <p>GoogleTest</p>
                        <p>Bash</p>
                        <p>Adruino</p>
                        <p>Linux</p>
                    </section>
                    <section id='logos' className='logos-container'>
                        <img src={clogo} className='logo-icon'></img>
                        <img src={cpplogo} className='logo-icon'></img>
                        <img src={cmakelogo} className='logo-icon'></img>
                        <img src={pythonlogo} className='logo-icon'></img>
                        <img src={javascriptlogo} className='logo-icon'></img>
                        <img src={reactlogo} className='logo-icon'></img>
                        <img src={reduxlogo} className='logo-icon'></img>
                        <img src={rustlogo} className='logo-icon'></img>
                        <img src={htmllogo} className='logo-icon'></img>
                        <img src={sasslogo} className='logo-icon'></img>
                        <img src={sqllogo} className='logo-icon'></img>
                        <img src={gitlogo} className='logo-icon'></img>
                        <img src={nodejslogo} className='logo-icon'></img>
                        <img src={bootstraplogo} className='logo-icon'></img>
                        <img src={csslogo} className='logo-icon'></img>
                    </section>
                    <section id='contact' className='contact-container'>
                        <p className='info-subtitle'>CONTACT:</p>
                        <section className='link-container'>
                            <img src={linkedinlogo} className='link-logo'></img>
                            <a href='https://www.linkedin.com/in/carloscza/' target="_blank" rel="noopener noreferrer">in/carloscza</a>
                        </section>
                        <section className='link-container'>
                            <img src={githublogo} className='link-logo'></img>
                            <a href='https://github.com/carloscza' target="_blank" rel="noopener noreferrer">carloscza</a>
                        </section>
                    </section>
                </section>
                <section id='certifications' className='certifications-container'>
                    <div><p className='certification-text'>JavaScript and Data Structures</p><p> freeCodeCamp Certification</p></div>
                    <div><p className='certification-text'>Responsive Web Design</p><p> freeCodeCamp Certification</p></div>
                    <div><p className='certification-text'>Front End Development Libraries</p><p> freeCodeCamp Certification</p></div>
                </section>
            </section>
        </section>
    );
}