import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";

const useAuth = () => {
    const user = useContext(AuthContext)
    return user
};

export default useAuth;