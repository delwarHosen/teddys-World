import { useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../../Pages/Provider/AuthProvider";

const ProductCard = ({ item }) => {
    const { _id, name, image, details, price } = item;
    const navigate = useNavigate()
    const location = useLocation()
    // const { user } = useAuth()
    const { user } = useContext(AuthContext)
    const [, refetch] = useCart()

    const axiosSecure = useAxiosSecure()

    const handleAddToCart = () => {
        if (user && user.email) {
            // to do
            const cartItems = {
                userId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItems)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} add to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Login",
                text: "Please login in to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card w-[340px] h-[540px] bg-[#D9D9D9] shadow-sm">
            <figure className="p-2">
                <img src={image} alt="Shoes" className="rounded-sm w-full h-[270px]" />
            </figure>
            <p className="absolute right-0 mt-8 mr-8 text-[#CE054D] text-xl font-semibold">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="bg-black px-10 py-3 hover:bg-slate-400 text-white font-semibold hover:text-black rounded-2xl border-b-[#AC7C01] border-b-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;