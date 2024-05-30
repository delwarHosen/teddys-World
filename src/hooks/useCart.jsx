import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";
import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";


const useCart = () => {
    const axiosSecure = useAxiosSecure()
    // const { user } = useAuth()
    const { user } = useContext(AuthContext)
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCart;