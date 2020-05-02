import React, { Component } from 'react';
import DefultBcg from '../images/room-1.jpeg';
import {RoomContext} from '../components/Context';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';

class SingleRoom extends Component {
    constructor(props) {
        super(props);
        /* console.log(this.props); */
        this.state = {
            slug: this.props.match.params.slug,DefultBcg
        }
    }
    static contextType = RoomContext;
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
            if(!room) {
                return <div className="error">
                    <h3>No such room chould be found </h3>
                    <Link to='/rooms' className='btn-primary'>
                        Back to room
                    </Link>
                </div>
            }
        const {name, description, capacity, size, price, extras, breackfast, pets, images} = room;
        const [mainImg, ...DefultImgs] = images;
        
        return (
            <>
                <StyledHero img={images[0] || this.state.DefultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className='btn-primary'>
                            Back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-rooo">
                    <div className="single-room-images">
                        {DefultImgs.map((img,index) => {
                            return <img src={img} key={index} alt={name}/>
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className='desc'>
                            <h3>Detials</h3>
                            <p>{description}</p>
                        </article>
                        <article className='info'>
                            <h3>Info</h3>
                            <h6>Price: $ {price}</h6>
                            <h6>Size: {size} SOFT</h6>
                            <h6>
                                Max Capacity: {' '}
                                {capacity > 1 ? `${capacity} people`: `${capacity} person`}
                            </h6>
                            <h6>
                                {pets? 'Pets Allowed': 'No Pets Allowed'}
                            </h6>
                            <h6>
                                {breackfast && 'Free Breackfast Include'}
                            </h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {extras.map((item,index) =>{
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>
        );
    }
}

export default SingleRoom;