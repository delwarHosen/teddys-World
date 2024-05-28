import Cover from "../../Shared/Cover/Cover";
import contactImg from "../../assets/coverImg/orderCover.png"

const ContactPage = () => {
    return (
        <div>
            <Cover img={contactImg} title="For teddy's Contact"></Cover>
            <div className="hero my-10">
                <div className=" w-[750px] bg-[#F1F1F1]">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-[#7B7B7B] mt-8 py-3 text-white hover:bg-slate-400 hover:text-black rounded-3xl border-b-[#AC7C01] border-b-4">Order Your Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;