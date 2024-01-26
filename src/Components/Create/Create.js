import React, { Fragment, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Create.css";
import Header from "../Header/Header";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Create = () => {
  let [productName, setProductName] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [image, setImage] = useState("");
  let submitBtnRef = useRef(null);
  const navigate = useNavigate();
  function handleFileUpload(event) {
    setImage(event.target.files[0]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    submitBtnRef.current.disabled = true;
    const storage = getStorage();
    const productImageRef = ref(
      storage,
      `olxImages/${Date.now().toString(36)}.jpg`
    );
    uploadBytes(productImageRef, image).then((snapshot) => {
      console.log("uploaded");
      getDownloadURL(productImageRef).then((url) => {
        console.log(url);
        navigate("/");
        firebase.firestore().collection("products").add({
          name: productName,
          category: category,
          price: price,
          imageUrl: url,
        });
      });
    });
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form encType="multipart/form-data">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              onChange={(e) => setProductName(e.target.value)}
              className="input"
              type="text"
              id="fname"
              name="Name"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              onChange={(e) => setCategory(e.target.value)}
              className="input"
              type="text"
              id="fname"
              name="category"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />

            <input
              onChange={(e) => setPrice(e.target.value)}
              className="input"
              type="number"
              id="fname"
              name="Price"
            />
            <br />
            <br />
            <input type="file" onChange={handleFileUpload} />
            <br />
            <button
              ref={submitBtnRef}
              className="uploadBtn"
              type="submit"
              onClick={handleSubmit}
            >
              upload and Submit
            </button>
          </form>
          <br />
        </div>
      </card>
    </Fragment>
  );
};
//

export default Create;
