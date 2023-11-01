import React from "react";
import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryCircle = ({ id, background, img, title }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".element");
    const circleRadius = 150;
    const totalElements = elements.length;
    const angleIncrement = (2 * Math.PI) / totalElements;

    elements.forEach((element, index) => {
      const angle = index * angleIncrement;
      const x = circleRadius + circleRadius * Math.cos(angle);
      const y = circleRadius + circleRadius * Math.sin(angle);

      element.style.left = `${x - 30}px`;
      element.style.top = `${y}px `;
    });
  }, []);
  return (
    <Col
      xs="3"
      sm="3"    
      md="6"
      lg="6"
      className="my-4 element
  mb-5
  pb-2 "
    >
      <Link to={`/products/category/${id}`} style={{ textDecoration: "none" }}>
        <div className="allCard mb-3 ">
          <div
            className="categoty-card "
            style={{ backgroundColor: `${background}` }}
          ></div>{" "}
          <img alt="zcv" src={img} className="categoty-card-img" />
          <p className="categoty-card-text my-2 element-title ">{title}</p>
        </div>
      </Link>
    </Col>
  );
};

export default CategoryCircle;
