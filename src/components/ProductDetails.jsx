import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useCartStore from "../store/cartStore";

const fetchProduct = async (productId) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/${productId}`
  );
  return data;
};

const ProductDetails = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  const { addToCart } = useCartStore();
  const handleAddToCart = () => {
    addToCart(product);
  };

  if (isLoading) return <div className="text-4xl">Loading...</div>;
  if (error) return <div className="text-4xl">Error fetching product</div>;

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 w-auto mx-auto mb-4 border-4 border-blue-500"
        />
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-lg text-white mb-4">Price: ${product.price}</p>
        <p className="text-md text-white mb-6">{product.description}</p>
        <button
          className="bg-blue-500 text-white m-4 px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button
          className="bg-blue-500 text-white m-4 px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
