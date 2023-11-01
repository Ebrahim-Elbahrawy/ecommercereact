import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import NavBar from "./Component/utility/NavBar";
import Footer from "./Component/utility/Footer";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import CatagoryPage from "./Pages/Catagory/CatagoryPage";
import BrandPage from "./Pages/Brand/BrandPage";
import ShopProductPage from "./Pages/Products/ShopProductPage";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import CartPage from "./Pages/Cart/CartPage";
import ChoosePayMethoudPage from "./Pages/Checkout/ChoosePayMethoudPage";
import AdminAllProductsPage from "./Pages/Admin/AdminAllProductsPage";
import AdminAllOrderPage from "./Pages/Admin/AdminAllOrderPage";
import AdminOrderDetailsPage from "./Pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Pages/Admin/AdminAddBrandPage";
import AdminAddCatagoryPage from "./Pages/Admin/AdminAddCatagoryPage";
import AdminAddSubCategoryPage from "./Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "./Pages/Admin/AdminAddProductPage";
import UserAllOrderPage from "./Pages/User/UserAllOrderPage";
import UserFavoritePage from "./Pages/User/UserFavoritePage";
import UserAddressePage from "./Pages/User/UserAddressePage";
import UserEditAdressPage from "./Pages/User/UserEditAdressPage";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import AdminEditProductPage from "./Pages/Admin/AdminEditProductPage";
import AdminAddCouponPage from "./Pages/Admin/AdminAddCouponPage";
import ProtectedRouteHook from "./hook/auth/protected-route-hook";
import ProtectedRoute from "./Component/utility/ProtectedRoute";
import ProductByCategory from "./Pages/Products/ProductByCategory";
import SuggestProductPage from "./Pages/addFolder/SuggestProductPage";

function App() {
  const [, isUser, isAdmin] = ProtectedRouteHook();
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<CatagoryPage />} />
          <Route path="/allbrand" element={<BrandPage />} />
          <Route path="/product" element={<ShopProductPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route
            path="/products/category/:id"
            element={<ProductByCategory />}
          />

          <Route path="/cart" element={<CartPage />} />
          <Route element={<ProtectedRoute auth={isAdmin} />}>
            <Route
              path="/admin/allproducts"
              element={<AdminAllProductsPage />}
            />
            <Route path="/admin/allorders" element={<AdminAllOrderPage />} />
            <Route
              path="/admin/editproduct/:id"
              element={<AdminEditProductPage />}
            />
            <Route
              path="admin/orders/:id"
              element={<AdminOrderDetailsPage />}
            />
            <Route path="admin/addbrand" element={<AdminAddBrandPage />} />
            <Route
              path="admin/addcategory"
              element={<AdminAddCatagoryPage />}
            />
            <Route path="admin/addcoupon" element={<AdminAddCouponPage />} />
            <Route
              path="admin/addsubcategory"
              element={<AdminAddSubCategoryPage />}
            />
            <Route path="admin/addproduct" element={<AdminAddProductPage />} />
          </Route>
          <Route element={<ProtectedRoute auth={isUser} />}>
            <Route path="user/allorders" element={<UserAllOrderPage />} />
            <Route
              path="/order/paymethoud"
              element={<ChoosePayMethoudPage />}
            />
            <Route
              path="user/favoriteproducts"
              element={<UserFavoritePage />}
            />
            <Route path="user/addresses" element={<UserAddressePage />} />
            <Route
              path="user/edit-address/:id"
              element={<UserEditAdressPage />}
            />
            <Route
              path="user/suggestproduct"
              element={<SuggestProductPage />}
            />
            <Route path="user/add-address" element={<UserAddAddressPage />} />
            <Route path="user/profile" element={<UserProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
