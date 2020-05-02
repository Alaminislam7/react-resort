import React, { Component } from 'react';
import {FaBeer, FaShuttleVan, FaHiking, FaCocktail} from 'react-icons/fa'
import Title from './Title';
class Services extends Component {
    state = {
        Services:[
            {
                icon: <FaCocktail/>,
                title: 'Free Cocktail',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quis asperiores quaerat, perferendis deleniti id.'
            },{
                icon: <FaHiking/>,
                title: 'Endless Hiking',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quis asperiores quaerat, perferendis deleniti id.'
            },{
                icon: <FaShuttleVan/>,
                title: 'Free Shuttle',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quis asperiores quaerat, perferendis deleniti id.'
            },{
                icon: <FaBeer/>,
                title: 'Buffer Beer',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quis asperiores quaerat, perferendis deleniti id.'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services'/>
                <div className="services-center">
                    {this.state.Services.map((item, index) => {
                        return(
                            <article key={index} className='service'>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })} 
                </div>
            </section>
        );
    }
}

export default Services;