import { useDrag } from "react-dnd";

const Product = ({ product }) => {
  const [, drag] = useDrag({
    item: { type: "PRODUCT", product },
  });

  return (
    <div
      ref={drag}
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{product.name}</h3>
      <p>{product.price}</p>s
    </div>
  );
};

export default Product;
