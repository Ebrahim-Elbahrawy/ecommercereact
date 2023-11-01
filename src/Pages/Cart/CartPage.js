import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartItem from "./../../Component/Cart/CartItem";
import CartCheckout from "./../../Component/Cart/CartCheckout";
import GetAllUserCart from "../../hook/cart/get-all-user-cart";

function CartPage() {
  const [, cartItems, totalPrice, couponNameRes, totalCartPriceAfterDiscount] =
    GetAllUserCart();

  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <div className="cart-title mt-4">عربة التسوق</div>
      </Row>
      <Row className="d-flex justify-content-center ">
        <Col xs="11" md="3">
          <CartCheckout
            cartItems={cartItems}
            totalPrice={totalPrice}
            couponNameRes={couponNameRes}
            totalCartPriceAfterDiscount={totalCartPriceAfterDiscount}
          />
        </Col>
        <Col xs="11" md="9">
          {cartItems.length >= 1 ? (
            cartItems.map((items, index) => {
              return <CartItem key={index} items={items} />;
            })
          ) : (
            <h3>لايوجد منتجات في العربة</h3>
          )}
        </Col>

      </Row>
    </Container>
  );
}

export default CartPage;
