import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div>
            <Hero>
                <Banner title='404 Page' subtitle='Page Not Found'>
                    <Link to='/' className='btn-primary'>
                        Return Home
                    </Link>
                </Banner>    
            </Hero>            
        </div>
    );
}

export default Error;

