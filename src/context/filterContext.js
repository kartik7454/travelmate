import { createContext } from "react";
import React, { useState } from "react";
import data from "../data";

 const FilterContext = createContext();
const maxPrice = Math.max(...data.map(item => item.price));
const minPrice = Math.min(...data.map(item => item.price));
const FilterProvider = ({ children }) => {
    const [Filter, setFilter] = useState({
      price:[minPrice,maxPrice],
        duration:30,
        rating: 1,
        sort:null
    });
  
    return (
      <FilterContext.Provider value={{ Filter, setFilter}}>
        {children}
      </FilterContext.Provider>
    );
  };
  
  export { FilterProvider, FilterContext };
