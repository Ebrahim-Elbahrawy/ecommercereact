import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewCoupon, getAllCoupon } from "../../redux/action/coponAction";
import notify from "../useNotification";

function AddCouponHook() {
  const [name, setName] = useState("");
  const [discount, setDiscount] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const dateRef = useRef();
  const dispatch = useDispatch();
  const handleNameChange = (e) => {
    e.persist();
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    e.persist();

    setDate(e.target.value);
  };
  const handleDateFocus = () => {
    dateRef.current.type = "date";
  };
  const handleDateBlur = () => {
    dateRef.current.type = "text";
  };

  const handleDiscountChange = (e) => {
    e.persist();

    setDiscount(e.target.value);
  };

  const handleAddCoupon = async (e) => {
    e.preventDefault();
    if (name.length < 1 || discount < 0) {
      notify("من فضلك أدخل البيانات", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      createNewCoupon({
        name: name,
        expire: date,
        discount: discount,
      })
    );

    setLoading(false);
  };
  const res = useSelector((state) => state.couponReducer.newCoupon);

  useEffect(() => {
    if (loading === false) {
      if (res.response && res.response.status === 400) {
        notify(
          " تم أضافة هذا الكوبون من قبل ,من فضلك اكتب كوبون جديد  ",
          "error"
        );
        console.log("happy");
      } else if (res && res.status === 201) {
        notify("تم أضافة الكوبون بنجاح", "success");
        setName("");
        setDate("");
        setDiscount("");
      }
    }
  }, [loading, res]);
  const allCoupon = useSelector((state) => state.couponReducer.allCoupon);

  useEffect(() => {
    const getData = async () => {
      await dispatch(getAllCoupon());
    };
    getData();
  }, []);
  return [
    name,
    discount,
    date,
    dateRef,
    handleNameChange,
    handleDateChange,
    handleDateFocus,
    handleDateBlur,
    handleDiscountChange,
    handleAddCoupon,
    allCoupon,
  ];
}

export default AddCouponHook;
