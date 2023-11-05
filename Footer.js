import React from 'react';
import logo from '../images/logo .svg'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Link</h3>
                    <ul>
                        <li><a href='/'>home</a></li>
                        <li><a href='/'>about</a></li>
                        <li><a href='/'>menu</a></li>
                        <li><a href='/'>reservations</a></li>
                        <li><a href='/'>order online</a></li>
                        <li><a href='/'>login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 Towncity, USA</li>
                        <li>Phone: <br/> ++ 0123 456 789</li>
                        <li>Email: <br/> little@lemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}