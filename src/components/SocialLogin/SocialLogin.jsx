import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const { googleSignIn } = useAuth()
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.user);
                    })
                navigate('/')
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