import { createContext } from 'react';

const InsultHistoryContext = createContext({ insultHistory: [], addInsult: () => {} });

export default InsultHistoryContext;
