import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateProduct = () => {
    const { name, category, details, price, image, _id } = useLoaderData()
    const { register, handleSubmit } = useForm()
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {

        const productItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            details: data.details,
            image: data.image
        }

        const menuRes = await axiosSecure.patch(`/products/${_id}`, productItem)
        console.log(menuRes.data);
        if (menuRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }

    return (
        <div className="m-10">
            <h1 className="text-3xl font-semibold text-center">Update Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Product name</span>
                    </label>
                    <input defaultValue={name} {...register("name", { required: true })} type="text" placeholder="Product Name" className="input input-bordered w-full" />
                </div>
                <div className='flex gap-6'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select defaultValue={category} {...register("category", { required: true })} className="select select-bordered w-full">
                            <option disabled value='default'>Select Category</option>
                            <option value="bear">Bear</option>
                            <option value="bunnies">Bunnies</option>
                            <option value="dall">Dalls</option>
                            <option value="cat">cats</option>
                            <option value="drink">Dogs</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <input defaultValue={price} {...register("price", { required: true })} type="number" placeholder="Product PRice" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control mb-2">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea defaultValue={details} {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">image</span>
                    </label>
                    <input defaultValue={image} {...register("image", { required: true })} type="text" placeholder="Product image" className="input input-bordered w-full" />
                </div>
                {/* <div className='form-control file-input w-full mb-2'>
                    <input {...register("image", { required: true })} type="file" className="form-control file-input w-full max-w-xs" />
                </div> */}
                <div>
                    <button className="btn bg-slate-300 font-bold border-b-[#000000] border-b-4 px-20 mt-4">Update Product</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;