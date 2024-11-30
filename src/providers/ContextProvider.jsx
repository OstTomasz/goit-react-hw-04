import { createContext, useState } from "react";

export const queryContext = createContext();

export const ContextProvider = ({ children }) => {
  const { searchQuery, setSearchQuery } = useState("");

  const setter = (query) => setSearchQuery(query);
  return (
    <queryContext.Provider value={{ searchQuery, setter }}>
      {children}
    </queryContext.Provider>
  );
};
