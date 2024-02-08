
import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/Menu';
import Search from './components/Search';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {

  // 
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    
    const fetchedProducts = [
      {
        id: '1',
        title: 'Adidas Steel Metal',
        description: 'Lorem Ipsum dolor sit consecttur',
        num: '$',
        price: 20,
        image: '/img/bootle1.jpeg',
      },
      {
        id: '2',
        title: 'Water Bottle',
        description: 'Lorem Ipsum dolor sit consecttur',
        num: '$',
        price: 40.03,
        image: '/img/bootle2.jpeg',
      },
      {
        id: '3',
        title: 'Stainless Steel',
        description: 'Lorem Ipsum dolor sit consecttur',
        num: '$',
        price: 10.03,
        image: '/img/product7.jpeg',
      },
      {
        id: '4',
        title: 'Adidas Performance White',
        description: 'Lorem Ipsum dolor sit consecttur',
        num: '$',
        price: 200.40,
        image: '/img/bootle18.jpeg',
      },
      {
        id: '5',
        title: 'Adidas Performance Black',
        description: 'Lorem Ipsum dolor sit consecttur',
        num: '$',
        price: 20.03,
        image: '/img/bootle9.jpeg',
      },
      {
        id: '6',
        title: 'Bottle',
        description: 'Lorem Ipsum dolor sit consecttur',
        num: '$',
        price: 20.03,
        image: '/img/product4.jpg',
      },
    ];

    //
    setProducts(fetchedProducts);
  }, []);

  useEffect(() => {
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    let totalPrice = 0;
    for (const itemId in cartItems) {
       totalPrice += cartItems[itemId].product.price * cartItems[itemId].quantity;
    }
  
    setTotal(totalPrice);
  }, [cartItems]);

  const addToCart = (productId) => {
    setCartItems(prevCartItems => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[productId]) {
        updatedCartItems[productId].quantity += 1;
      } else {
        updatedCartItems[productId] = {
          product: products.find(product => product.id === productId),
          quantity: 1,
        };
      };
  
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  
      return updatedCartItems;
    });
  };


  /*const addToCart = (productId, quantity) => {
    setCartItems(prevCartItems => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[productId]) {
        updatedCartItems[productId].quantity += quantity;

      } else {
        updatedCartItems[productId] = {
          product: products.find(product => product.id === productId),
          quantity: quantity,
        };
      };

      return updatedCartItems;
    });
    
  }; */


  const removeFromCart = (productId) => {
    setCartItems(prevCartItems => {
      const updatedCartItems = { ...prevCartItems };
      delete updatedCartItems[productId];

      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

      return updatedCartItems;
    });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuy = () => {
    // Effectue l'achat
    alert("Your product is placed");
    setCartItems({});
    setTotal(0);
    localStorage.removeItem('cartItems');
};

  return (
    <div className="container">
      <Menu />
      <div className="center">
        <Search handleSearch={handleSearch} />
        <h2>PRODUCTS</h2>
        <ProductList products={filteredProducts} addToCart={addToCart} />
      </div>
      
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} total={total} handleBuy={handleBuy}/>
    </div>
  );
}

export default App;
