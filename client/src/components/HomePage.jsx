import React from 'react';
import './post.css';
import { useNavigate } from 'react-router-dom';
import CreateUser from './CreateUser.jsx';

const HomePage = () => {

    const navigate = useNavigate(); // Initialize useNavigate
  
    const goToPage1 = () => {
      navigate('/CreateUser'); // Use navigate to go to CreateUser page
    };
  

  const goToPage2 = () => {
    // Define the function to navigate to page2
    window.location.href = 'page2.html';
  };

  return (
    <>
      <div className="home-header">
        <div className="center">
          <img
            id="img"
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais"
            alt="X Logo"
            height="600"
            className="left-aligned"
          />
        </div>
      </div>
      <header>
        <div>
          <h1 className="large-text2">Happening Now</h1>
          <h1 className="joi">Join Today.</h1>
        </div>
      </header>
      <main>
        <button className="crea" onClick={goToPage1}>Create Account</button>
      </main>
      <p className="para">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
      <footer>
        <h2 className="al">Already have an account?</h2>
        <button className="si" onClick={goToPage2}>Sign In</button>
      </footer>
    </>
  );
};

export default HomePage;
