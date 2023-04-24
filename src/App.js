// 1) Import createContext Hook
import { useState, createContext } from 'react';
import Page from './components/Page.jsx';
import './App.css';

// 2) Create and export a context object

/* Why is the context object capitlized?
It's a convention to capitalize the first letter of constants that hold context objects, so that it's clear they are special objects that have a significant role in the application's architecture. This helps make it easier for other developers to understand the code and to work with the context object in their own components. */
export const UserStatus = createContext(null);

function App() {
  const[signedIn, setSignedIn] = useState(false);

  return (
    <>
      {/* 3) Establish a provider */}
      <UserStatus.Provider value={[signedIn, setSignedIn]}>
        <h1>{signedIn ? 
          "Click below to Sign Out" : 
          "Click below to Please Sign In"}</h1>
        <Page />
      </UserStatus.Provider>      
    </>
  );
}

export default App;
