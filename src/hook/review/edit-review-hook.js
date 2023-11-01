import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import notify from "../useNotification";
import { editReview } from "../../redux/action/reviewAction";
function EditReviewHook(review) {
  const dispatch = useDispatch();
  const [newRateText, setNewRateText] = useState(review.review);
  const [newRateValue, setNewRateValue] = useState(review.rating);
  const [loading, setLoading] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const onChangeRateValue = (value) => {
    setNewRateValue(value);
  };
  const onChangeText = (e) => {
    setNewRateText(e.target.value);
  };
  const handleEdit = async () => {
    setLoading(true);
    await dispatch(
      editReview(review._id, {
        review: newRateText,
        rating: newRateValue,
      })
    );
    setLoading(false);
    handleCloseEdit();
  };
  const res = useSelector((state) => state.reviewReducer.editReview);
  useEffect(() => {
    if (loading === false) {
      if (res.status && res.status === 200) {
        notify("تم تعديل التقييم بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else notify("هناك مشكله فى عملية التعديل", "error");
    }
  }, [loading]);

  return [
    showEdit,
    handleEdit,
    handleCloseEdit,
    handleShowEdit,
    onChangeRateValue,
    onChangeText,
    newRateValue,
    newRateText,
  ];
}

export default EditReviewHook;
