import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Pages/Provider/AuthProvider";
// import useAuth from '../hooks/useAuth'
const SocialLogin = () => {
    // const { googleSignIn } = useAuth()
    const { googleSignIn } = useContext(AuthContext)
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })

    }

    return (
        <div>
            <div className="divider">or</div>
            <div className="flex justify-center mb-2">
                <button onClick={handleGoogleLogin} className="btn bg-white text-xl font-bold border-b-[#000000] border-b-4"><FaGoogle className="text-yellow-500"></FaGoogle> Google</button>
            </div>
        </div>

    );
};

export default SocialLogin;