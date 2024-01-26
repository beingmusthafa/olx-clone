import React, { useEffect, useState } from "react";
import Card from "./Card";
import Heart from "../../assets/Heart";
import "./Post.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
function Posts() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const productsSnapshot = await getDocs(collection(db, "products"));
      const productsList = productsSnapshot.docs.map((doc) => doc.data());
      return productsList;
    }
    getProducts().then((products) => {
      setProducts(products);
    });
  });
  return (
    <div className="postParentDiv">
      {/* <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {products.map((product) => {
            return <Card key={product.id} product={product}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
