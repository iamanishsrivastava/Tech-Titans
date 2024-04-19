import { useState } from 'react';
import './App.css';
import CreatePost from './components/CreatePost.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './components/HomePage.jsx';
import CreateUser from './components/CreateUser.jsx';

function App() {
  
  // Define hardcoded props
  const hardcodedProps = {
    username: "exampleUsername",
    handle: "exampleHandle",
    text: "This is a hardcoded post."
  };

  return (
    <>
    <BrowserRouter>
    <Routes>  
    <Route 
              path="/" 
              element={<HomePage />} 
            />
      {/* Pass hardcoded props to CreatePost component */}
      <Route path='/createpost' element={<CreatePost {...hardcodedProps} />} />
      <Route path='/createuser' element={<CreateUser />} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
