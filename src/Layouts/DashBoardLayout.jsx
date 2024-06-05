import { FaBook, FaHome, FaPaypal, FaShoppingCart } from "react-icons/fa";
import { FaBookBible, FaStreetView } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const DashBoardLayout = () => {
    const [isAdmin] = useAdmin()
    return (
        <div className="flex max-w-screen-xl mx-auto">
            <div className="bg-purple-600 min-h-screen pt-10" style={{ borderRadius: '0px 40px 40px 0px' }}>
                <ul className="menu px-8 text-white">
                    {
                        isAdmin ? <>
                            <li className="my-1">
                                <NavLink to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</NavLink>
                            </li>
                            <li className="my-1">
                                <NavLink to="/dashboard/addProduct"><FaBook></FaBook>Add Product</NavLink>
                            </li>
                            <li className="my-1">
                                <NavLink to="/dashboard/manageProduct"><FaShoppingCart></FaShoppingCart>Manage Product</NavLink>
                            </li>
                            <li className="my-1">
                                <NavLink to="/dashboard/allUser"> <FaPaypal></FaPaypal> All AUser</NavLink>
                            </li>
                        </>
                            :
                            <> <li className="my-1">
                                <NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink>
                            </li>
                                <li className="my-1">
                                    <NavLink to="/dashboard/carts"><FaBook></FaBook> Reservation</NavLink>
                                </li>
                                <li className="my-1">
                                    <NavLink to="/dashboard/carts"><FaShoppingCart></FaShoppingCart>My Cart</NavLink>
                                </li>
                                <li className="my-1">
                                    <NavLink to="/dashboard/carts"> <FaPaypal></FaPaypal> Payment History</NavLink>
                                </li>
                                <li className="my-1">
                                    <NavLink to="/dashboard/carts"> <FaStreetView></FaStreetView> Add Review</NavLink>
                                </li>
                                <li className="my-1">
                                    <NavLink to="/dashboard/carts"> <FaBookBible></FaBookBible> My Booking</NavLink>
                                </li></>
                    }
                    <div className="divider text-white"></div>
                    <li className="my-2 text-white bg-slate-800 rounded-lg">
                        <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                </ul>
            </div>
            <div className="w-3/4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoardLayout;