import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import {  Navbar, Products, SearchRe, Cart, Checkout } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [foundUsers, setFoundUsers] = useState(products);


    const [name, setName] = useState('');

    const filter = (e) => {
        const keyword = e.target.value;
    
        if (keyword !== '') {   
          const results = products.filter((product) => {
            return product.name.toLowerCase().startsWith(keyword.toLowerCase());
            // Use the toLowerCase() method to make it case-insensitive
          });
          setFoundUsers(results);
        } else {
            (<Products />)
          // If the text field is empty, show all users
        }
    
        setName(keyword);
      };

    console.log(foundUsers)

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);  
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async  (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);

        setCart(cart);
    }
 
    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity }); 

        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);
    return (
        <Router>
            <div>
            <Navbar totalItems={cart.total_items} 
            products={products} 
            filter={filter} 
            name={name}
           />
            <Switch>
                <Route exact path="/">
                    <Products products={products} onAddToCart={handleAddToCart}/>
                </Route>
                <Route exact path="/SearchRe">
                    <SearchRe onAddToCart={handleAddToCart} foundUsers={foundUsers} />
                </Route>
                <Route exact path="/cart">
                    <Cart 
                    cart={cart} 
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleEmptyCart={handleEmptyCart}
                    />
                </Route>
                <Route exact path="/checkout">
                    <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} refreshCart = {refreshCart} />
                </Route>
            </Switch>
            </div>
        </Router>
        
    )
}

export default App
