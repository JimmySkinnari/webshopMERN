import './App.css';
import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import LoginContext from './contexts/LoginContextProvider'
import CartContext from './contexts/CartContextProvider'
import ProductContext from './contexts/ProductContextProvider'
import RegisterContext from './contexts/RegisterUserContextProvider'

// "My account" så man kan kolla sina orders
// Visa endast sökfältet när man är i "/"-routen
// Detaljvy?

function App() {

  return (
    <div className="App">
      <LoginContext>
        <RegisterContext>
          <ProductContext>
            <CartContext>
              <Header />
              <Main />
              <Footer />
            </CartContext>
          </ProductContext>
        </RegisterContext>
      </LoginContext>
    </div>
  );
}

export default App;
