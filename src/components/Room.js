import React from 'react';
import defaultImg from '../images/room-1.jpeg';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Room(props) {
    
    const {name, slug, images, price} = props.room;
    
    
    return (
        <article className='room'>
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="Signle room"/>
                <div className="price-top">
                    <h6>$ {price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className='btn-primary room-link'>
                    features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    );
}

export default Room;

Room.prototype = {
    room:propTypes.shape({
        name: propTypes.string.isRequired,
        slug: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
    })
}