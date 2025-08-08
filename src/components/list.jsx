    import React from 'react';
import data from '../data';
import TripCard from './TripCard'
import { QueryContext } from "../context/queryContext";
import { FilterContext } from "../context/filterContext";
const List = () => {
  const { Query , setQuery } = React.useContext(QueryContext); 
  const { Filter , setFilter } = React.useContext(FilterContext);

 let  filteredData = data.filter((item)=>{
  
  
    return (
      (item.title.toLowerCase().includes(Query.toLowerCase()) )&& 
      (item.duration <= Filter.duration) &&
      (item.rating >= Filter.rating) &&
      (item.price>=Filter.price[0] &&item.price<=Filter.price[1])
      
    );
 })

 // Apply sorting by price
 if (Filter.sort === "lth") {
   filteredData.sort((a, b) => a.price - b.price);
 } else if (Filter.sort === "htl") {
   filteredData.sort((a, b) => b.price - a.price);
 }

 return (
    <div className="list-container">
       <div className="trip-card-grid">
        {filteredData.length === 0 ? (
          <div className="no-results">No trips found</div>
        ) : (
          filteredData.map((item) => (
            <TripCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              duration={item.duration}
              rating={item.rating}
              image={item.image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default List;
