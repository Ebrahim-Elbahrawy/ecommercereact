import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AllCategoryPageHook from "../../hook/category/all-category-page-hoock";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const CategoryHeader = () => {
  const [, category, ,] = AllCategoryPageHook();
  const [items, setItems] = useState();
  useEffect(() => {
    if (category) {
      setItems(category.data);
    }
  }, [category]);
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">الكل</div>
            {items
              ? items.map((item, index) => (
                  <Link
                    key={index}
                    style={{ textDecoration: "none" }}
                    className="cat-text-header "
                    to={`/products/category/${item._id}`}
                  >
                    {" "}
                    {item.name}{" "}
                  </Link>
                ))
              : null}
            <div className="cat-text-header">المزيد</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;
