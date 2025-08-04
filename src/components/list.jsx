import React from 'react';
import data from '../data';
import TripCard from './TripCard'
const List = () => {
  return (
    <div>
       <div>
        {data.map((item)=>(
          
          <TripCard key ={item.id} 
          title={item.title}
          description={item.description}
          price={item.price }
          duration ={item.duration}
          rating={item.rating}
          image={item.image}/>
        ))}
      </div>
    </div>
  );
};

export default List;
