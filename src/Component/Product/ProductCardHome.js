import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductCardHook from "../../hook/products/product-card-hook";
function ProductCardHome({ items, favArr }) {
  const [, , handelFav, favImg] = ProductCardHook(items, favArr);
  return (
    <Col xs="12" sm="6" md="3" lg="3" className="product-item mt-5">
      <div>
        <div className="d-flex  rate-skew  align-items-center">
          <img className="" src={rate} alt="" height="16px" width="16px" />
          <div className="card-rate mx-2">{items.ratingsAverage || 0}</div>
          <img
            src={favImg}
            alt=""
            className="text-center"
            style={{
              height: "24px",
              width: "26px",
              cursor: "pointer",
            }}
            onClick={handelFav}
          />
        </div>
        <Link to={`/product/${items._id}`} style={{ textDecoration: "none" }}>
        
          
             <img 
             src={items.imageCover}
             className="img-fluid product-thumbnail "
             alt="not found"
           />
          
          
          <h3 class="product-title">{`${items.title} `}</h3>
          <strong class="product-price">
            <div className="card-price">
              {items.priceAfterDiscount >= 1 ? (
                <>
                  {" "}
                  <span>{items.priceAfterDiscount} بدلا من </span>
                  <span className="text-with-line">{items.price}</span>
                  <span className="card-currency mx-1 text-danger">جنيه</span>
                </>
              ) : (
                <>
                  <span>{items.price}</span>
                  <span className="card-currency mx-1 text-danger">جنيه</span>
                </>
              )}
            </div>
          </strong>
          <span class="icon-cross">
            <div class="icon-cross-plus">+</div>
          </span>
        </Link>
      </div>
      <ToastContainer />
    </Col>
  );
}
export default ProductCardHome;

