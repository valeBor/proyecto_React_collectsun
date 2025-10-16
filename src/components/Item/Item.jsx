import "./Item.css"

export const Item = ({ nombre, precio, descripcion, imagen, children }) => {
  //recordamos el uso del children, no es obligatorio que este

  return (
    <article>
      
        
      <article className= "product-item">

      <img src={imagen} alt={descripcion} />
       <h2 className="product-title">{nombre}</h2>
      <p>Precio: ${precio}</p>
      <p>Descripcion: {descripcion}</p>
      {children}
      
       </article>  

    </article>
  );
};

