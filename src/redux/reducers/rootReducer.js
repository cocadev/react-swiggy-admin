// import external modules
import { combineReducers } from "redux";
// import internal(own) modules
import calenderReducer from "./calenderReducer";
import emailReducer from "./email/";
import contactsReducer from "./contacts/";
import productReducer from "./products/productReducer";
import categoryReducer from "./categories/categoryReducer";
import employeReducer from "./employees/employeReducer";
import clientReducer from "./clients/clientReducer";
import orderReducer from "./orders/orderReducer";

const rootReducer = combineReducers({
   calender: calenderReducer,
   emailApp: emailReducer,
   contactApp: contactsReducer,
   product:productReducer,
   category:categoryReducer,
   employe:employeReducer,
   client:clientReducer,
   order:orderReducer,
});

export default rootReducer;
