import { createContext } from 'react';

const InsultHistoryContext = createContext({ insultHistory: [], 
addInsult: () => {},
setError: () => {}
});

export default InsultHistoryContext;
