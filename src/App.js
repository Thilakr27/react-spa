import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SellerList from './components/SellerList';



function App() {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <LoginForm />
        <SellerList />
      </div>
      <Footer />
    </>
  );
}

export default App;
