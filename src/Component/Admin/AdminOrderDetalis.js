import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CartItem from '../Cart/CartItem'

import { ToastContainer } from 'react-toastify';
import ChangeOrderStatusHook from '../../hook/admin/change-order-status-hook';
import GetOrderDetalisHook from '../../hook/admin/get-order-detalis-hook';
import UserAllOrderItem from '../User/UserAllOrderItem';
  
const AdminOrderDetalis = () => {
    const { id } = useParams()
    const [orderData, cartItems] = GetOrderDetalisHook(id)
console.log(id)
    const [formatDate, onChangePaid, changePayOrder, onChangeDeliver, changeDeliverOrder] = ChangeOrderStatusHook(id)

                      
    return (
        <div>
          {
            cartItems.map((item)=>{
              return  <Col xs="12" className="cart-item-body mt-5 d-flex  ">
                <img
                  width="160px"
                  height="197px"
                  src={`https://backendecommerce2.onrender.com/products/${item.product.imageCover}`}
                  alt=""
                  className="ps-3 ms-2 "
                />
                <div className="w-100">
                  <Row className="justify-content-between ">
                    <Col
                      sm="12"
                      className=" d-flex flex-row justify-content-between ps-3 ms-3"
                    >
                     
                   
                    </Col>
                  </Row>
                  <Row className="justify-content-center mt-2">
                    <Col sm="12" className=" d-flex flex-row justify-content-start">
                      <div className="d-inline pt-2 cat-title">{item.product.title}</div>
                      
                    </Col>
                  </Row>
                
                  <Row>
                    <Col sm="12" className="mt-1 d-flex">
                      {item.color ? (
                        <div
                          className="color ms-2 border"
                          style={{ backgroundColor: item.color }}
                        ></div>
                      ) : null}
                    </Col>
                  </Row>
          
                </div>
              </Col>

            })
          }
            <UserAllOrderItem orderItem={orderData} />
            <Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2">تفاصيل العميل</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        الاسم:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {orderData ? orderData.user ? orderData.user.name : '' : ''}
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        رقم الهاتف:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {orderData ? orderData.user ? orderData.user.phone : '' : ''}
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        الايميل:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {orderData ? orderData.user ? orderData.user.email : '' : ''}
                    </div>
                </Col>
                <div className="d-flex mt-2 justify-content-center">
                    <div>
                        <select
                            name="pay"
                            id="paid"
                            onChange={onChangePaid}
                            className="select input-form-area mt-1  text-center w-50">
                            <option value="0">الدفع</option>
                            <option value="true">تم</option>
                            <option value="false">لم يتم</option>
                        </select>
                        <button onClick={changePayOrder} className="btn-a px-2 d-inline mx-1 ">حفظ </button>
                    </div>
                    <div>
                        <select
                            onChange={onChangeDeliver}
                            name="deliver"
                            id="deliver"
                            className="select input-form-area mt-1  text-center  w-50">
                            <option value="0">التوصيل</option>
                            <option value="true">تم</option>
                            <option value="false">لم يتم</option>
                        </select>
                        <button onClick={changeDeliverOrder} className="btn-a px-2 d-inline mx-1 ">حفظ </button>
                    </div>
                </div>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default AdminOrderDetalis
