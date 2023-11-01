import { useEffect, useState } from "react";
import notify from "../useNotification";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../../redux/action/authAction";
import { useNavigate } from "react-router-dom";

function RegisterHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createUser = useSelector((state) => state.authReducer.createUser);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState("");
  const onChangeName = (e) => {
    e.persist();

    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    e.persist();
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    e.persist();
    setPassword(e.target.value);
  };
  const onChangeconfirmPassword = (e) => {
    e.persist();

    setConfirmPassword(e.target.value);
  };
  const onChangephone = (e) => {
    e.persist();

    setPhone(e.target.value);
  };
  const valdiationvalues = () => {
    if (name === "" || password === "") {
      notify("من فضلك اكمل البيانات", "error");
      return;
    }
    if (name.length <= 6) {
      notify("من فضلك يجب زياده عدد حروف الاسم ل 6حروف ", "error");
      return;
    }
    if (phone.length <= 10) {
      notify("من فضلك  ادخل رقم تلفون صحيح  ", "error");
      return;
    }
    if (password !== confirmPassword) {
      notify("كلمه السر غير مطابقة  ", "error");
      return;
    }
  };
  const onsubmit = async (e) => {
    valdiationvalues();
    e.preventDefault();
    setLoading(true);
    await dispatch(
      createNewUser({
        name: name,
        email: email,
        password: password,
        passwordConfirm: confirmPassword,
        phone: phone,
      })
    );
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (createUser) {
        console.log(createUser);
        if (createUser.data.token) {
          localStorage.setItem("token", createUser.data.token);
          notify("تم تسجيل الحساب بنجاح", "success");
          // setLoading(true);
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
        if (createUser.data.errors) {
          console.log(createUser.data.errors[0].msg);
          if (createUser.data.errors[0].msg === "E-mail already in use") {
            notify("  ايميل بحوزه احدهم ", "error");
          }
        }
      }
    }
  }, [loading]);
  return [
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeconfirmPassword,
    onChangephone,
    onsubmit,
  ];
}

export default RegisterHook;

// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
// export function displayHomePage() {
// // do code here
//   setTimeout(() => {
//     navigate("/");
//   }, 2000);
// }
