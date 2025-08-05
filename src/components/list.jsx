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
      (item.duration < Filter.duration) 
    );
  
  
  
 })
  return (
    <div>
      
       <div>
        {filteredData.map((item)=>(
          
          <TripCard id ={item.id} 
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
