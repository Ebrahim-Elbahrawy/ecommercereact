import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "./../useNotification";
import { createReview } from "../../redux/action/reviewAction";

function AddReviewHook(id) {
  const dispatch = useDispatch();
  const cretateReview = useSelector(
    (state) => state.reviewReducer.createReview
  );
  const [rateText, setRateText] = useState("");
  const [rateValue, setRateValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const onChangeRateText = (e) => {
    setRateText(e.target.value);
  };
  const onChangeRateValue = (value) => {
    setRateValue(value);
  };

  var user = "";
  if (localStorage.getItem("user") != null) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  const onSumbit = async (e) => {
    e.preventDefault();
    if (rateText === "") {
      notify("من فضلك أدخل تعليق", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      createReview(id.id, {
        review: rateText,
        rating: rateValue,
      })
    );
    setLoading(false);
    notify("تم الاضافة بنجاح", "sucess");
  };
  useEffect(() => {
    if (loading === false) {
      if (cretateReview) {
        console.log(cretateReview);
      }
    }
  }, [loading]);
  return [
    onChangeRateText,
    onChangeRateValue,
    rateText,
    rateValue,
    user,
    onSumbit,
  ];
}

export default AddReviewHook;
