import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import rate from "../../images/rate.png";
import Pagination from "../utility/Pagination";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import ViewAllReviewHook from "../../hook/review/view-allreview-hook";
import { useParams } from "react-router-dom";
import { allReview } from "../../redux/action/reviewAction";

const RateContainer = ({ rateAvg, rateQty }) => {
  const id = useParams();
  const [reviewOnProduct, onPress] = ViewAllReviewHook(id.id);

  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1 ">التقيمات</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}</div>
          <div className="rate-count d-inline p-1 pt-2">
            ({`${rateQty} تقييم`})
          </div>
        </Col>
      </Row>
      <RatePost />

      {reviewOnProduct.data ? (
        reviewOnProduct.data.map((item, index) => {
          return <RateItem key={index} item={item} />;
        })
      ) : (
        <h3>لا يوجد تقيمات حاليا </h3>
      )}
      {reviewOnProduct.paginationResult &&
      reviewOnProduct.paginationResult.numberOfPages >= 2 ? (
        <Pagination
          pageCount={
            reviewOnProduct.paginationResult
              ? reviewOnProduct.paginationResult.numberOfPages
              : 0
          }
          onPress={onPress}
        />
      ) : null}
    </Container>
  );
};

export default RateContainer;
