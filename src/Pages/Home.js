import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

class Home extends Component {
    render() {
        return (
            <>
                <Hero>
                    <Banner title='Luxarious rooms' subtitle='Delux rooms starting at $744'>
                        <Link to='/rooms' className='btn-primary'>
                            Our rooms
                        </Link>
                    </Banner>
                </Hero>
                <Services/>
                <FeaturedRooms/>
            </>
        );
    }
}

export default Home;