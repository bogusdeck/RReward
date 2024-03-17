"use client";
import React, { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";


async function addDataToFireStore(
  productname,
  category,
  purchaseDate,
  purchasePrice,
  productReview,
  images
) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      productname: productname,
      category: category,
      purchaseDate: purchaseDate,
      purchasePrice: purchasePrice,
      productReview: productReview,
      images: images,
    });
    console.log("Document written with ID :", docRef.id);
    return true;
  } catch (error) {
    console.error("error addding document", error);
    return false;
  }
}

const PostReview = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("Select");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [productReview, setProductReview] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFireStore(
      productName,
      category,
      purchaseDate,
      purchasePrice,
      productReview,
      images
    );
    if (added) {
      setProductName("");
      setCategory("Select");
      setPurchaseDate("");
      setPurchasePrice("");
      setProductReview("");
      setImages([]);

      alert("Data added to firestore DB!!");
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  }

  return (
    <div>
      <h2 className="font-bold text-3xl bg-gray-900 text-center pt-10 pb-5 text-white">
        Product Review
      </h2>
      <div className="bg-gray-900 flex items-center justify-center">
        <form
          className="bg-white shadow-md rounded px-8 pt-5 pb-8 mb-6 w-11/12"
          onSubmit={handleSubmit}
        >
          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Product Name"
            >
              Product Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="productname"
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-center"
            htmlFor="Product Category"
          >
            Product Category
          </label>

          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option
              selected
              value="Smartphone"
              onChange={(e) => setCategory(e.target.value)}
            >
              Smartphone
            </option>
            <option
              value="Laptops"
              onChange={(e) => setCategory(e.target.value)}
            >
              Laptops
            </option>
            <option
              value="Smartwatches"
              onChange={(e) => setCategory(e.target.value)}
            >
              Smartwatches
            </option>
            <option
              value="Headphones"
              onChange={(e) => setCategory(e.target.value)}
            >
              Headphones
            </option>
            <option
              value="Home Appliances"
              onChange={(e) => setCategory(e.target.value)}
            >
              Home Appliances
            </option>
            <option
              value="Computer Pheriperal"
              onChange={(e) => setCategory(e.target.value)}
            >
              Computer Pheriperal
            </option>
          </select>

          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Purchase Date"
            >
              Purchase Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="purchasedate"
              type="date"
              value={purchaseDate}
              onChange={(e) => setPurchaseDate(e.target.value)}
            />
          </div>

          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Purchased Price"
            >
              Purchased Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="proprice"
              type="number"
              placeholder="Purchased Price"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
            />
          </div>

          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Product Review"
            >
              Product Review
            </label>
            <textarea
              row={5}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="proreview"
              placeholder="Product Review"
              value={productReview}
              onChange={(e) => setProductReview(e.target.value)}
            ></textarea>
          </div>

          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Product Image"
            >
              Product Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="proreview"
              type="file"
              multiple
              placeholder="Choose Image"
              onChange={handleImageChange}
            />
          </div>

          {/* Submit button */}
          <div className="md:col-span-5 text-center">
            <button
              className="bg-blue-500 text-white rounded-md p-2 text-sm text-center m-2"
              type="submit"
            >
              Post Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostReview;
