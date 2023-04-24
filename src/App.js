// 1) Import createContext Hook
import { useState, createContext } from 'react';
import Page from './components/Page.jsx';
import './App.css';

// 2) Create and export a context object
export const UserStatus = createContext(null);

function App() {
  const[signedIn, setSignedIn] = useState(false);

  return (
    <>
      {/* 3) Establish a provider */}
      <UserStatus.Provider value={[signedIn, setSignedIn]}>
        <h1>{signedIn
          ? "Take Care. Click below to Sign Out"
          : "Welcome! Click below to Please Sign In"}</h1>
        <Page />
      </UserStatus.Provider>      
    </>
  );
}

export default App;
