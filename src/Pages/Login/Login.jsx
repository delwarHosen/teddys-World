import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../assets/coverImg/orderCover.png'
import loginImg from '../../assets/contactImg/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
    console.log("state in the location", location.state);


    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                console.log(result);
                reset()
                Swal.fire({
                    title: "User created account successfully",
                    showClass: {
                        popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
                    },
                    hideClass: {
                        popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
                    }
                });
                navigate(from, { replace: true })
            })
    }
    return (
        <div>
            <Cover img={coverImg} title="Login Teddys world"></Cover>
            <div className="hero my-10">
                <div className="flex mx-auto">
                    <div className='md:flex gap-5'>
                        <div className="text-center">
                            <img className='md:h-[420px] md:w-full w-[380px]' src={loginImg} alt="" />
                        </div>
                        <div className="w-full max-w-sm shadow bg-[#F1F1F1] border-2 border-[#C31773]">
                            <h1 className='text-4xl font-bold text-center uppercase pt-5'>Please Login!</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email")} placeholder="email" className="input" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password")} placeholder="password" className="input" required />
                                </div>
                                <div className="form-control mt-3">
                                    <button className="btn bg-white text-xl font-bold border-b-[#000000] border-b-4">Login</button>
                                </div>
                                <p className='text-center font-medium mt-2'><Link to='/signup'>New Hare? Create a new account</Link></p>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;