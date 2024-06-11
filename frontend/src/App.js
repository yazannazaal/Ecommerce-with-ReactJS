import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./router/HomePage";
import Login from "./components/UserActions/Login";
import Register from "./components/UserActions/Register";
import Root from "./router/Root";
import { Provider } from "react-redux";
import { store } from "./RTK/productStore/sotre";
import Logout from "./components/UserActions/Logout";
import { UserDataContextProvider } from "./context/UserDataStore";

function App() {
  return (
    <UserDataContextProvider>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </Provider>
    </UserDataContextProvider>
  );
}

export default App;
