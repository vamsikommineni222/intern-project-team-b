import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';



function App() {
  return (
    <BrowserRouter>
 <div className="grid-container">
  <main>
    <Route path ="/product/:id" component ={ProductScreen}></Route>
    <Route path =  "/" component={HomeScreen} exact></Route>
  </main>
  <footer className="row center">Techvkrash reserved</footer>
</div>
</BrowserRouter> 
  );
}

export default App;
