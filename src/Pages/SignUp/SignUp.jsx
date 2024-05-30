import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../assets/coverImg/orderCover.png'
import loginImg from '../../assets/contactImg/login.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin';

const SignUp = () => {

    const { createUser, userUpdateProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result);

                userUpdateProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User successfully create account",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })

                    })
                    .catch(error => console.log(error))


            })
    }

    return (
        <div>
            <Cover img={coverImg} title="Create Account Teddys world"></Cover>
            <div className="hero my-10">
                <div className="flex mx-auto">
                    <div className='md:flex gap-x-5'>
                        <div className="text-center">
                            <img className='md:h-[510px] md:w-full w-[380px]' src={loginImg} alt="" />
                        </div>
                        <div className="w-full max-w-sm shadow bg-[#F1F1F1] border-2 border-[#C31773] ">
                            <h1 className='text-4xl font-bold text-center uppercase pt-5'>Sign Up!</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="name" className="input" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photoURL", { required: true })} placeholder="photo URL" className="input" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input" required />
                                    {errors.email && <span className='text-red-600'> Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password")} placeholder="password" className="input" required />
                                </div>
                                <div className="form-control mt-2">
                                    <input className="btn bg-white text-xl font-bold border-b-[#000000] border-b-4" type="submit" value="Sign Up" />
                                </div>
                                <p className='text-center font-medium mt-1'><Link to='/login'>Already have an Account? please login</Link></p>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;