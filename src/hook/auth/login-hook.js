import { useEffect, useState } from "react";
import notify from "../useNotification";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/action/authAction";
import { useNavigate } from "react-router-dom";
const LoginHoock = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeEmail = (e) => {
    e.persist();
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    e.persist();
    setPassword(e.target.value);
  };
  const onSubmit = async () => {
    setLoading(true);
    await dispatch(
      loginUser({
        email,
        password,
      })
    );
    setLoading(false);
  };
  const userLogin = useSelector((state) => state.authReducer.loginUser);

  useEffect(() => {
    if (loading === false) {
      if (userLogin) {
        if (userLogin.data.token) {
          localStorage.setItem("token", userLogin.data.token);
          localStorage.setItem("user", JSON.stringify(userLogin.data.data));
          notify("تم تسجيل الدخول بنجاح", "success");
          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else {
          localStorage.removeItem("token");
          notify(" يوجد مشكله فى كلمه السر او الايميل  ", "error");
        }
        setLoading(true);
      }
    }
  }, [loading]);
  return [email, password, loading, onChangeEmail, onChangePassword, onSubmit];
};

export default LoginHoock;
