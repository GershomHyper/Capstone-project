import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                    <link to="/booking"><button></button></link>
                </div>

                <div className='banner-Img'>
                    <img src={bannerImg} alt=''/>
                </div>
            </section>
        </header>
    );
};

export default Header;