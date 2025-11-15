import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext/CartProvider";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { FormContact } from "./components/FormContact/FormContact";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./Toastify.css";
import { Login } from "./components/Login/Login";
import {RutaProtegida} from "./components/RutaProtegida/RutaProtegida";
import LoginUser from "./components/LoginUser/LoginUser";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>

        <Routes>
          <Route element={<MainLayout />}  >
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

            {/* 🔹 Agregá esta línea para que funcione el link de contacto */}
            <Route path="/contacto" element={<FormContact />} />

            {/* Carrito */}
            <Route path="/carrito" element={<Cart />} />

            
            <Route path="/login-user" element={<LoginUser />} />

          </Route>

          <Route path="/admin" element={<AdminLayout />}>

            <Route index element={<Login/>} />
            <Route path="alta-productos" element={<RutaProtegida>
              <ProductFormContainer />
            </RutaProtegida>}
            />

          </Route>

          {/*<Route path="/admin" element={<ProductFormContainer />} />*/}

        </Routes>

        <Footer />
        

      </CartProvider>
    </BrowserRouter>
  );
}

export default App;



