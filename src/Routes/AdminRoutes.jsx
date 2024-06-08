import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()


    if (loading || isAdminLoading) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    
    if (user && isAdmin) {
        return children
    }


    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;