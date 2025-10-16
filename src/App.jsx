
import { useState } from "react";
import { Boton } from "./components/Boton/Boton";
import { Header } from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import { ItemContainer } from "./components/ItemContainer/ItemContainer";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import {CartProvider} from "./context/CartContext/CartProvider";


function App() {

  

  return (

   <>
      <BrowserRouter>
      <CartProvider>
        <div>
       
             <Header/>

             <Routes>
             <Route path="/" element= {<ItemContainer titulo={"Bienvenidos"}/>}/>
             <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
         
             </Routes>
            
            <Footer/>
     
       </div>
       </CartProvider>
    </BrowserRouter>
  </>
  
  );
};


export default App;



  

