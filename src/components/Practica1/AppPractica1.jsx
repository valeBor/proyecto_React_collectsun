import { Boton } from './components/Boton';
import { Item } from './components/item';
import { Item2 } from './components/Item2';
import { Item3 } from './components/Item3';
import { Item4 } from './components/Item4';
import { Item5 } from './components/Item5';
import { Item6 } from './components/Item6';
import './App.css'

function App() {

  const prod = {nombre: "Remera", precio: 10000, descripcion: "Lalalalal"}
  

  return (
    <>
      <div>
        <Boton texto={"Enviar"} color ={"green"}/>
        <Boton texto={"Cancelar"} color ={"red"}/>
        <Item nombre={"pantalon"} precio={"5000"}/>
        <Item2 item={prod}/>
        <Item3 {...prod}/>
        <Item4 {...prod} destacado = {false}/>
        <Item5>

           <h1>tiene children</h1>
           <p>{prod.nombre}</p>
           <p>{prod.precio}</p>
        </Item5>
        <Item6 nombre="Zapas" precio={9000}/>

        

       
      </div>
     </>
  );
}

export default App;
