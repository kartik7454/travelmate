import { createContext } from "react";
import React, { useState } from "react";

 const SavedContext = createContext();

const SavedProvider = ({ children }) => {
    const [Saved, setSaved] = useState([ ]);
  
    return (
      <SavedContext.Provider value={{ Saved, setSaved}}>
        {children}
      </SavedContext.Provider>
    );
  };
  
  export { SavedProvider, SavedContext };