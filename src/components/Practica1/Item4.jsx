export const Item4 = ({nombre, precio, destacado}) => {

return (
 <article style={{border: destacado ? "solid gold" : "solid grey"}}>
 
 <p> Item 1</p>
 <p>{nombre}</p>
 <p>Precio $ {precio}</p>


 </article>


);

};