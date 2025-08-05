import { createContext } from "react";
import React, { useState } from "react";

 const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const [Filter, setFilter] = useState({
        duration:30,
        rating: 1
    });
  
    return (
      <FilterContext.Provider value={{ Filter, setFilter}}>
        {children}
      </FilterContext.Provider>
    );
  };
  
  export { FilterProvider, FilterContext };
