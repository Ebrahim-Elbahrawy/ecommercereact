import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductCardHook from "../../hook/products/product-card-hook";
function ProductCard({ items, favArr }) {
  const [, , handelFav, favImg] = ProductCardHook(items, favArr);
  const baseUrl = "https://backendecommerce2.onrender.com/products/";

  // Use a state variable to store imageUrl
  const [imageUrl, setImageUrl] = useState(items.imageCover);
  
  useEffect(() => {
    // Check if the URL contains the base URL
    if (imageUrl && imageUrl.startsWith(baseUrl)) {
      // Remove the base URL from the image URL
      setImageUrl(imageUrl.substring(baseUrl.length));
    }
  }, []);

 

  // Now imageUrl contains the modified URL without the base URL

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
             src={ baseUrl + imageUrl}
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
export default ProductCard;
/* <Card
        className="my-2 "
        style={{
          width: "100%",
          maxHeight: "325px",
          minHeight: "325px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
      >
        <div className="d-flex  rate-skew">
          <img className="" src={rate} alt="" height="16px" width="16px" />
          <div className="card-rate mx-2">{items.ratingsAverage || 0}</div>
        </div>
        <Link to={`/product/${items._id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ height: "220px", width: "100%" }}
            src={`http://127.0.0.1:8000/products/${imageUrl}`}
          />
        </Link>
        <div
          className="d-flex justify-content-between align-items-center mx-2 my-2"
          style={{ minHeight: "50px" }}
        >
          <Card.Title>
            <div className="card-title">{`${items.title} `}</div>
          </Card.Title>
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
        <div
          className="card-price-total "
          style={{ backgroundColor: backgroundColor }}
        >
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
        </div>
        <Card.Body>
         
        </Card.Body>
      </Card> */
