import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from './../axios config/axiosInstace';
const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axiosInstance
      .get(`${params.id}?api_key=5481f667a4f7c7b678b2be7504db4cce`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>{product.title}</h1>
      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="true" href="#">Film Details</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.sonicthehedgehogmovie.com">https://www.sonicthehedgehogmovie.com</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">{product.original_title}</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title">{product.original_title}</h5>
          <p class="card-text">{product.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
