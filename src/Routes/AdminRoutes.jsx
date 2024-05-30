import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({ children }) => {
    const [isAdmin, isAdminLoading] = useAdmin()
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (user && isAdmin) {
        return children
    }

    if (loading || isAdminLoading) {
        return <span className="loading loading-ring loading-lg"></span>
    }


    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;