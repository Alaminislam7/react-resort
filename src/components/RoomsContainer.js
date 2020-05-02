import React from 'react'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {WithRoomConsumer} from '../components/Context';
import Loading from '../components/Loading';

export function RoomContainer({context}) {
    const {rooms, sortedRooms, loading} = context;
        if(loading) {
            return <Loading/>;
        }
        return (
            <div>
                <RoomFilter rooms={rooms}/>
                <RoomList rooms={sortedRooms}/>
            </div>
        );
}
export default WithRoomConsumer(RoomContainer);

/* import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {RoomConsumer} from '../components/Context';
import Loading from '../components/Loading';

function RoomsContainer() {
    return(
        <RoomConsumer>
            {value => {
            console.log(value);
                const {rooms, sortedRooms, loading} = value;
                if(loading) {
                    return <Loading/>;
                }
                return (
                    <div>
                        <RoomFilter rooms={rooms}/>
                        <RoomList rooms={sortedRooms}/>
                    </div>
                );
            }}
        </RoomConsumer>
    )
}

export default RoomsContainer; */