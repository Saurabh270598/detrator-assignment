import { Fragment } from "react";
import "../globals.css";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();
  return data;
}
const PostScreen = async () => {
  const product = await getData();
  return (
    <div className="page-wrapper">
      <span className="page-heading">Posts.js</span>
      {product.map((item, index) => {
        return (
          // outer wrapper
          <div className="outer-wrapper">
            {/* inner containers */}
            <img src={item.image} height={100} width={100} />
            <div className="title-container">
              {item.title}
              <div className="description-container">{item.description}</div>
            </div>

            <div className="price-container">Rs {item.price}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PostScreen;
