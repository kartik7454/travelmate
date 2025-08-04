import { createContext } from "react";
import React, { useState } from "react";

 const QueryContext = createContext();

const QueryProvider = ({ children }) => {
    const [Query, setQuery] = useState('hi');
  
    return (
      <QueryContext.Provider value={{ Query, setQuery}}>
        {children}
      </QueryContext.Provider>
    );
  };
  
  export { QueryProvider, QueryContext };