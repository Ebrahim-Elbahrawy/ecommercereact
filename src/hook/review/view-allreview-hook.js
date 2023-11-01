import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allReview } from "../../redux/action/reviewAction";

function ViewAllReviewHook(id) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const reviewOnProduct = useSelector((state) => state.reviewReducer.allReview);

  useEffect(() => {
    setLoading(true);
    dispatch(allReview(id, 1, 3));
    setLoading(false);
  }, []);
  const onPress = async (page) => {
    await dispatch(allReview(id, page, 3));
  };

  return [reviewOnProduct, onPress];
}

export default ViewAllReviewHook;
