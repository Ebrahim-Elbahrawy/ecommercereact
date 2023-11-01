import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotification";
import {
  createNewAddress,
  getAllAddress,
} from "../../redux/action/userAddressAction";

function AddAddressUserHook() {
  const dispatch = useDispatch();
  const [addressName, setAddressName] = useState();
  const [addressDescription, setAddressDescription] = useState();
  const [phone, setPhone] = useState();
  const [loading, setLoading] = useState(true);
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
    setLoading(true);
    await dispatch(
      createNewAddress({
        alias: addressName,
        details: addressDescription,
        phone: phone,
      })
    );

    setLoading(false);
  };
  useEffect(() => {
    const getData = async () => {
      await dispatch(getAllAddress());
    };
    getData();
  }, []);
  const allAddress = useSelector(
    (state) => state.userAddressReducer.allAddress
  );
  let allUserAddress = [];
  if (allAddress && allAddress.data) {
    allUserAddress = allAddress.data;
  }

  const res = useSelector((state) => state.userAddressReducer.newAddress);

  useEffect(() => {
    if (loading === false) {
      if (res.response && res.response.status === 400) {
        notify(
          " تم أضافة هذا الكوبون من قبل ,من فضلك اكتب كوبون جديد  ",
          "error"
        );
      } else if (res && res.status === 200) {
        notify("تم أضافة العنوان بنجاح", "success");
        setAddressName("");
        setAddressDescription("");
        setPhone("");
      }
    }
  }, [loading, res]);
  return [
    addressName,
    addressDescription,
    phone,
    handleAddressName,
    handleAddressDescription,
    handlePhone,
    handleSumbit,
    allUserAddress,
  ];
}

export default AddAddressUserHook;
