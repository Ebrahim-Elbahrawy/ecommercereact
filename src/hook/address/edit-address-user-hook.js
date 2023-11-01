import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  edditAddress,
  getOneAddress,
} from "../../redux/action/userAddressAction";
import notify from "../useNotification";
import { useNavigate } from "react-router-dom";
function EditAddressUserHook(id) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let oneAddress = useSelector((state) => state.userAddressReducer.oneAddress);
  const [addressName, setAddressName] = useState("");
  const [addressDescription, setAddressDescription] = useState("");
  const [phone, setPhone] = useState();
  const [loading, setLoading] = useState();
  const [change, setChange] = useState();
  const handleAddressName = (e) => {
    e.persist();
    setAddressName(e.target.value);
  };
  const handleAddressDescription = (e) => {
    e.persist();
    setAddressDescription(e.target.value);
  };
  const handlePhone = (e) => {
    e.persist();
    setPhone(e.target.value);
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    if (addressName === "" || addressDescription === "" || phone < 11) {
      notify("من فضلك أدخل البيانات", "warn");
      return;
    }
    setChange(true);
    await dispatch(
      edditAddress(id, {
        alias: addressName,
        details: addressDescription,
        phone: phone,
      })
    );
    setChange(false);
  };

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getOneAddress(id));
      setLoading(false);
    };
    get();
  }, [id]);

  useEffect(() => {
    if (loading === false) {
      if (oneAddress && oneAddress.data) {
        setAddressName(oneAddress.data.alias);
        setAddressDescription(oneAddress.data.details);
        setPhone(oneAddress.data.phone);
      }
    }
  }, [loading]);
  const res = useSelector((state) => state.userAddressReducer.editAddress);

  useEffect(() => {
    if (change === false) {
      if (res.response && res.response.status === 400) {
        notify(
          " تم أضافة هذا العنوان من قبل ,من فضلك اكتب العنوان من  جديد  ",
          "error"
        );
      } else if (res && res.status === 200) {
        notify("تم التعديل العنوان بنجاح", "success");
        setTimeout(() => {
          navigate("/user/addresses");
        }, 1000);
      }
    }
  }, [change]);
  return [
    loading,
    handleSumbit,
    addressName,
    addressDescription,
    phone,
    handleAddressName,
    handleAddressDescription,
    handlePhone,
  ];
}

export default EditAddressUserHook;
