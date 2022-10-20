import React from 'react';
import ReactDOM from 'react-dom/client';
import {Footer, Herosec} from './footer'
import './index.css'  //External css
import Product from './Product';
import { data } from './data';

const name = " Surya "
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1 className="heading" > Hello {name} Front-End Developers 🔥 </h1>
    <Herosec name={"Harry poter"} role="hero" /> 
    <Footer/>
    <Product data={data} />
  </>
);
