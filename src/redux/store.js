import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // محتاجين نراجع الجزء دة
import rootReducer from "./reducer/rootReducer"; // بيجمع كل reducer
import { composeWithDevTools } from "redux-devtools-extension"; // بتخلينا نشوف state فى مرحلة الانشاء
const initialState = {};
const medleware = [thunk];
export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...medleware))
);
