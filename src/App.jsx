import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext/CartProvider";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { TopBar } from "./components/TopBar/TopBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div>
           
          <TopBar/>
          <Header />

          <Routes>
            {/* Ruta principal: muestra todos los productos */}
            <Route
              path="/"
              element={<ItemListContainer titulo={"Mis creaciones"} />}
            />

            {/* Ruta por categoría: filtra según el parámetro */}
            <Route
              path="/category/:category"
              element={<ItemListContainer titulo={"Mis creaciones"} />}
            />

            {/* Detalle de producto */}
            <Route path="/detail/:id" element={<ItemDetailContainer />} />

            {/* Carrito */}
            <Route path="/carrito" element={<Cart />} />
            <Route path="/admin" element={<ProductFormContainer />} />
          </Routes>

          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

  

