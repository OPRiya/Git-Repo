import React from 'react';
import Login from "./Components/Login";
import "./App.css";
const App = () => {
  const user =userSelector(selectUser);


  return ( 
  <div> 
      {user ? <logout /> : <login/>}
  </div> 
  );
};

export default App;
