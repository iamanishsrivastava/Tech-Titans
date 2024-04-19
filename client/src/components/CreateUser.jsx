import React from 'react';
import "./post.css"

const CreateUser = () => {
  const signIn = () => {
    // Define the signIn function logic here
  };

  return (
    <main>
      <h1 className="large-text1">Create Your Account</h1>
      <div className="center">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <br />
      <div className="center">
        <label htmlFor="Email">Email:</label>
        <input type="text" id="email" name="email" />
      </div>
      <br/>
      <div className="center">
        <label htmlFor="Password">Password:</label>
        <input type="text" id="password" name="email" />
      </div>
      <br/>
      <div className="center">
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <br />
      <div className="center">
        <h3 className="large-text">Date Of Birth</h3>
        <p className="tex">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
        <br />
        <label htmlFor="dob_day">Day:</label>
        <input type="number" id="dob_day" name="dob_day" min="1" max="31" required />

        <label htmlFor="dob_month">Month:</label>
        <input type="number" id="dob_month" name="dob_month" min="1" max="12" required />

        <label htmlFor="dob_year">Year:</label>
        <input type="number" id="dob_year" name="dob_year" min="1900" max="2024" required />
      </div>

      <footer>
        <div className="nxt">
          <pre>
            <input type="button" value="Next" onClick={signIn} />
          </pre>
        </div>
      </footer>
    </main>
  );
};

export default CreateUser;
