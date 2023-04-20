import { createContext } from "react";

const insultHistoryContext = createContext({
  insultHistory: [], 
  addinsult: () => {}
})

export default insultHistoryContext;