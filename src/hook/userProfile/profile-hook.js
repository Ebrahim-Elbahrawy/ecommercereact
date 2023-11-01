import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edditUser, updatePassword } from "./../../redux/action/userAction";
import notify from "./../useNotification";
import { useNavigate } from "react-router-dom";
function ProfileHook() {
  let user = [];
  if (localStorage.getItem("user") != null) {
    user = JSON.parse(localStorage.getItem("user"));
  }
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const handleUserName = (e) => {
    e.persist();
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    e.persist();
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    e.persist();
    setPhone(e.target.value);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleSumbit = async (e) => {
    let body;
    if (user.email === email) {
      body = {
        name: userName,
        phone: phone,
      };
    } else {
      body = {
        name: userName,
        phone: phone,
        email: email,
      };
    }
    e.preventDefault();
    setLoading(true);
    await dispatch(edditUser(body));

    setLoading(false);
    setShow(false);
  };
  const res = useSelector((state) => state.userReducer.editUse);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        window.location.reload();
      } else {
      }
    }
  }, [loading]);
  // change password
  const [oldPassword, setOldPassword] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [loadingPass, setLoadingPass] = useState();
  const changeOldPassword = (e) => {
    e.persist();
    setOldPassword(e.target.value);
  };
  const changePassword = (e) => {
    e.persist();
    setPassword(e.target.value);
  };
  const changeConfirmPassword = (e) => {
    e.persist();
    setConfirmPassword(e.target.value);
  };

  const handleChangePassword = async (e) => {
    if (confirmPassword !== password) {
      notify(" كلمتان المرور غير متطابقتين ", "warn");
      return;
    }
    if (password.length < 6) {
      notify("  يجب ان تكون كلمة المرور اكثر من 6 أرقام ", "warn");
      return;
    }
    e.preventDefault();
    setLoadingPass(true);
    await dispatch(
      updatePassword({
        currentPassword: oldPassword,
        password: password,
        passwordConfirm: confirmPassword,
      })
    );
    setLoadingPass(false);
  };

  const resPass = useSelector((state) => state.userReducer.updatePassword);

  useEffect(() => {
    if (loadingPass === false) {
      if (resPass && resPass.status === 200) {
        notify("تم تغير كلمة المرور بنجاح ", "success");
        setTimeout(() => {
          navigate("/login");
          window.location.reload();
        }, 1000);
        localStorage.removeItem("user");

        setOldPassword("");
        setPassword("");
        setConfirmPassword("");
      }
    } else {
    }
  }, [loadingPass]);
  return [
    show,
    handleClose,
    handleShow,
    handleSumbit,
    userName,
    email,
    phone,
    handleUserName,
    handleEmail,
    handlePhone,
    oldPassword,
    password,
    confirmPassword,
    changeOldPassword,
    changeConfirmPassword,
    changePassword,
    handleChangePassword,
  ];
}

export default ProfileHook;
