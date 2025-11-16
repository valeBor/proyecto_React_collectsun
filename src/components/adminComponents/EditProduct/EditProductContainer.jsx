import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProductById,
  updateProduct,
} from "../../../services/products";
import { uploadToImgbb } from "../../../services/uploadImage";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { toast } from "react-toastify";


export const EditProductContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    imageUrl: ""
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch {
        toast.error("Error cargando el producto");
      }
    };

    cargar();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = product.imageUrl;

      if (file) {
        imageUrl = await uploadToImgbb(file);
      }

      await updateProduct(id, {
        ...product,
        price: Number(product.price),
        imageUrl,
      });

      toast.success("Producto actualizado");
    } catch {
      toast.error("Error actualizando");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      product={product}
      errors={{}}
      loading={loading}
      onChange={handleChange}
      onFileChange={setFile}
      onSubmit={handleSubmit}
    />
  );
};
