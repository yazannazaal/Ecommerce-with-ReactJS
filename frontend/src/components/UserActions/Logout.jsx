import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../../context/UserDataStore";
export default function Logout() {
  const { setUserData } = useContext(userDataContext);
  const navigate = useNavigate();
  localStorage.removeItem("userToken");
  setUserData(null);
  navigate("/");
}
