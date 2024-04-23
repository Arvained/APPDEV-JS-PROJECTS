import React, { useState } from 'react';
import LoginForm from './LoginForm';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import Footer from './Footer';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleLogin = () => {
    //USER ACC OR ADMIN ACC
    if (username === 'arvin' && password === '12345') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleAddReview = (title, date, body) => {
    setReviews([...reviews, { title, date, body }]);
  };

  const handleDeleteReview = index => {
    const newReviews = [...reviews];
    newReviews.splice(index, 1);
    setReviews(newReviews);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <button onClick={handleLogout}>Logout</button>
          <ReviewForm onAddReview={handleAddReview} />
          <ReviewList reviews={reviews} onDeleteReview={handleDeleteReview} />
        </div>
      ) : (
        <LoginForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          onLogin={handleLogin}
        />
      )}
      <Footer />
    </div>
  );
} 

export default App;
