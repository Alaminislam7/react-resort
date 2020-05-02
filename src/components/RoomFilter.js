import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../components/Context';
import Title from '../components/Title';

//Get all Unique value

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };

function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, pets, breakfast} = context;
    
    // get unique types
    let types = getUnique(rooms, "type");
    // add all
    types = ["all", ...types];
    // map to jsx
    types = types.map((item, index) => (
        <option key={index} value={item}>
        {item}
        </option>
    ));

    //get unique capacity
    let people = getUnique(rooms, "capacity");
    people = people.map((item,index) => (
        <option key={index} value={item}>
            {item}
        </option>    
    ));


    return (
        <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          {/* select type */}
          <div className="form-group">
            <label htmlFor="type">Room type</label>
            <select
              name="type"
              id="type"
              onChange={handleChange}
              className="form-control"
              value={type}
            >
                {types}
            </select>
          </div>
          {/* end of select type */}
          {/* select guest */}
          <div className="form-group">
            <label htmlFor="capacity">Guest</label>
            <select
              name="capacity"
              id="capacity"
              onChange={handleChange}
              className="form-control"
              value={capacity}
            >
                {people}
            </select>
          </div>
          {/* end of select guest */}
          {/* select room price */}
            <div className="form-group">
                <label htmlFor="price">
                    room price {price}
                </label>
                <input type="range" name="price" id="price" value={price} onChange={handleChange} min={minPrice} max={maxPrice} className="form-control"/>
            </div>
          {/* end select room price */}
          {/* room size */}
            <div className="form-group">
                <label htmlFor="size">
                    room size
                </label>
                <div className="size-inputs">
                    <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                    <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                </div>
            </div>
          {/* end room size */}
          {/* Extras */}
            <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                    <label htmlFor="breakfast">breakfast</label>
                </div>
                <div className="single-extra">
                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                    <label htmlFor="pets">pets</label>
                </div>
            </div>
          {/* End Extras */}
        </form>
      </section>
    );
}

export default RoomFilter;