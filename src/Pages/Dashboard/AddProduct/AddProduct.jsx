import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
// import useAxiosPublic from '../../../hooks/useAxiosPublic';

// const image_hoisting_key = import.meta.env.VITE_IMAGE_HOISTING_KEY
// const image_hoisting_api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`

const AddProduct = () => {
    const { register, handleSubmit } = useForm()

    const axiosSecure = useAxiosSecure()
    // const axiosPublic = useAxiosPublic()
    const onSubmit = async (data) => {
        // console.log(data)
        // const imageFile = { image: data.image[0] }
        // const res = await axiosPublic.post(image_hoisting_api, imageFile, {
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //     }
        // })
        // console.log(res);
        // fetch('https://api.imgbb.com/1/upload?key=')

        const productItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            details: data.details,
            image: data.image
        }

        const menuRes = await axiosSecure.post('/products', productItem)
        console.log(menuRes.data);
        if (menuRes.data.insertedId) {
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
        <div className='mx-4 my-10 w-full'>
            <div>
                <h2 className='text-4xl font-semibold text-center'>Add Items</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Product name</span>
                    </label>
                    <input {...register("name", { required: true })} type="text" placeholder="Product Name" className="input input-bordered w-full" />
                </div>
                <div className='flex gap-6'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select defaultValue='default' {...register("category", { required: true })} className="select select-bordered w-full">
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
                        <input {...register("price", { required: true })} type="number" placeholder="Product PRice" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control mb-2">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">image</span>
                    </label>
                    <input {...register("image", { required: true })} type="text" placeholder="Product image" className="input input-bordered w-full" />
                </div>
                {/* <div className='form-control file-input w-full mb-2'>
                    <input {...register("image", { required: true })} type="file" className="form-control file-input w-full max-w-xs" />
                </div> */}
                <div>
                    <button className="btn bg-slate-300 font-bold border-b-[#000000] border-b-4 px-20 mt-4">Add Product</button>
                </div>
            </form>

        </div>
    );
};

export default AddProduct;