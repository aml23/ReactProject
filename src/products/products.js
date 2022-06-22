import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "./../axios config/axiosInstace";

const Products = () => {

  var [currentPage, setcurrentPage] = useState(1);

  const NextPage = () => {
    setcurrentPage(++currentPage);
  };
  const brevPage = () => {
    setcurrentPage(--currentPage);
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&page=${currentPage}`)
      .then((res) => {
        setProducts(res.data.results);
        console.log(res.data.results);

      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

  return (
    <div className="container">
      <br />
      <div className="row row-cols-1 row-cols-md-2 g-4">

        {products.map((product) => {
          return (
            <div className="col" key={product.id}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${product.poster_path}`}
                  style={{ height: "400px" }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <Link to={`/details/${product.id}`}>Details</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="d-grid gap-2 row" >
        <button class="btn btn-primary" type="button" onClick={() => { NextPage() }}>Next</button>
        <button class="btn btn-primary" type="button" onClick={() => { brevPage() }}>Brevois</button>
      </div>
      <br />

    </div>
  );
};

export default Products;
