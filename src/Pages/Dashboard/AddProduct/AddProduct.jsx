import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Spinner} from 'react-spinners-css';

import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddProduct = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [loading,setLoading]=useState(false)

  const [subcategories, setSubcategories] = useState([]);
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  

  const updateSubcategories = (category) => {
    if (category === 'Animals') {
      setSubcategories(['Cat', 'Dog','Squirrel','Rabbit']);
    } else if (category === 'Plants and Seeds') {
      setSubcategories(['Fruit Plants', 'Flower Plants','Medicine Plants','Indoor Plant','Seeds']);
    } 
    else if (category === 'Birds') {
        setSubcategories(['Budgie', 'Chicken','Pigion','Taki / Pea-Cock','Coca Tail']);
      }
    else if (category === 'Fish') {
      setSubcategories(['Axolot', 'Fighter Fish','Guppy/ Molly/ Platy','Gold Fish/ Koi','Crab', 'Tutle']);
    }
    else if (category === 'Foods') {
      setSubcategories(['Fish Foods', 'Birds Foods','Cat Foods','Dog Foods']);
    }
    else if (category === 'Medicines') {
      setSubcategories(['Fish Medicines', 'Birds Medicines','Pets Medicines']);
    }
    else if (category === 'Tools') {
      setSubcategories(['Fertilizer', 'Garden Tools','Aquarium Tools','Pet Tools']);
    }
     else {
      setSubcategories([]);
    }
  };

  const image_hoisting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const onSubmit = (data) => {
    setLoading(true)
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(image_hoisting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const product = {
            name: data.productName,
            category:data.category,
            subCategory:data.subcategory,
            seller_name: user?.displayName,
            seller_email: user?.email,
            available_quantity: parseInt(data.available_quantity),
            price: parseInt(data.price),
            image: imageData.data.display_url,
          
          };
          console.log(data.category);
          console.log(product);
          if(data.category === 'Plants and Seeds'){
            axiosSecure.post("/plants", product).then((data) => {
              if (data.data.insertedId) {
                setLoading(false)
                reset();
                Swal.fire({
                  title: "Product added Successfully",
                  icon: "success",
                  confirmButtonText: "ok",
                });
              }
            })
          }
          if(data.category === 'Birds'){
            axiosSecure.post("/birds", product).then((data) => {
              if (data.data.insertedId) {
                setLoading(false)
                reset();
                Swal.fire({
                  title: "Product added Successfully",
                  icon: "success",
                  confirmButtonText: "ok",
                });
              }
            })
          }
          if(data.category === 'Fish'){
            axiosSecure.post("/fishes", product).then((data) => {
              if (data.data.insertedId) {
                setLoading(false)
                reset();
                Swal.fire({
                  title: "Product added Successfully",
                  icon: "success",
                  confirmButtonText: "ok",
                });
              }
            })
          }
          if(data.category === 'Animals'){
            axiosSecure.post("/animals", product).then((data) => {
              if (data.data.insertedId) {
                setLoading(false)
                reset();
                Swal.fire({
                  title: "Product added Successfully",
                  icon: "success",
                  confirmButtonText: "ok",
                });
              }
            })
          }
          if(data.category === 'Foods'){
            axiosSecure.post("/foods", product).then((data) => {
              if (data.data.insertedId) {
                setLoading(false)
                reset();
                Swal.fire({
                  title: "Product added Successfully",
                  icon: "success",
                  confirmButtonText: "ok",
                });
              }
            })
          }
          if(data.category === 'Medicines'){
            axiosSecure.post("/medicines", product).then((data) => {
              if (data.data.insertedId) {
                setLoading(false)
                reset();
                Swal.fire({
                  title: "Product added Successfully",
                  icon: "success",
                  confirmButtonText: "ok",
                });
              }
            })
          }
          if(data.category === 'Tools'){
            axiosSecure.post("/tools", product).then((data) => {
              if (data.data.insertedId) {
                setLoading(false)
                reset();
                Swal.fire({
                  title: "Product added Successfully",
                  icon: "success",
                  confirmButtonText: "ok",
                });
              }
            })
          }
          
        
        }
      })
     
  };
  if(loading){
    return <Spinner color="#6bb42f"/>
  }
  return (
    <div className="w-11/12 md:w-3/4 mx-auto my-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" border bg-[#e9f8e1] p-5 rounded space-y-3 shadow"
      >
       <h2 className="text-center font-medium text-3xl md:text-4xl my-5 ">
        <span className="text-[#6bb42f] font-extrabold text-3xl md:text-5xl">|</span> Add a
        Product{" "}
        <span className="text-[#6bb42f] font-extrabold text-3xl md:text-5xl">|</span>
      </h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name*</span>
          </label>
          <input
            type="text"
            defaultValue={user?.displayName}
            placeholder="Enter your name"
            className="input input-bordered"
            {...register("Seller_name")}
          />

          {/* {errors.email?.type === "required" && (
            <p className="text-red-600" role="alert">
              Email is required
            </p>
          )} */}
        </div>
        <div className="mb-3 form-control">
          <label className="label">
            <span className="label-text">Seller Email* </span>
          </label>
          <input
            type="email"
            className="input input-bordered"
            defaultValue={user?.email}
            placeholder="Enter your email"
            {...register("Seller_email")}
          />
          {/* {errors.phone?.type === "required" && (
            <p className="text-red-600" role="alert">
              Phone number is required
            </p>
          )} */}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name*</span>
          </label>
          <input
            type="text"
            name="className"
            className="input input-bordered"
            placeholder="Enter product name"
            {...register("productName", { required: true })}
          />
          {errors.productName?.type === "required" && (
            <p className="text-red-600" role="alert">
              Product Name is required
            </p>
          )}
        </div>
       <div className="md:flex justify-between gap-5">
       <div className="w-full" >
            <label htmlFor="category" className="label">Product Category*</label>
        <Controller 
        
            name="category"
           
            control={control}
            defaultValue=""
            rules={{ required: 'Category is required' }}
            render={({ field }) => (
              <div>
                <select className="select select-bordered w-full"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  updateSubcategories(e.target.value);
                }}
              >
                <option value="">Select Category</option>
                <option value="Plants and Seeds">Plants & Seeds</option>
                <option value="Birds">Birds</option>
                <option value="Fish">Fish</option>
                <option value="Animals">Animals</option>
                <option value="Foods">Foods</option>
                <option value="Medicines">Medicines</option>
                <option value="Tools">Tools</option>
              
              </select>
              {errors.category && <p className="text-red-500">{errors.category.message}</p>}
              </div>
            )}
          />
          </div>
    
          <div className=" w-full">
            <label htmlFor="category" className="label">Sub-Category*</label>
          <Controller
            name="subcategory"
            control={control}
            defaultValue=""
            rules={{ required: 'Category is required' }}

            render={({ field }) => (
              <div>
                <select className="select select-bordered  w-full" {...field}>
                <option value="">Select </option>
                {subcategories.map((subcat) => (
                  <option key={subcat} value={subcat}>
                    {subcat}
                  </option>
                ))}
              </select>
              {errors.subcategory && <p className="text-red-500">{errors.subcategory.message}</p>}
              </div>
            )}
          />
          </div>
       </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="textarea"
            name="description"
            className="input input-bordered h-20"
            placeholder="Write about product"
            {...register("description")}
          />
         
        </div>
      
        <div className="md:flex justify-between gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available quantity*</span>
            </label>
            <input
              type="number"
              placeholder="Enter available quantity"
              className="input input-bordered "
              {...register("available_quantity", { required: true })}
            />
            {errors.available_quantity?.type === "required" && (
              <p className="text-red-600" role="alert">
                Available quantity are required
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price* </span>
            </label>
            <input
              type="number"
              placeholder="Enter product price"
              className="input input-bordered"
              {...register("price", { required: true })}
            />
            {errors.price?.type === "required" && (
              <p className="text-red-600" role="alert">
                Price is is required
              </p>
            )}
          </div>
        </div>
        <div className="form-control w-full pb-3">
          <label className="label">
            <span className="label-text">Choose Product image*</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full "
            {...register("image", { required: true })}
          />
          {errors.image?.type === "required" && (
            <p className="text-red-600" role="alert">
              Image is required
            </p>
          )}
        </div>
        <input
          type="submit"
          className="btn  bg-[#6bb42f] border text-white hover:border-[#6bb42f] hover:text-[#6bb42f] w-full font-bold p-2"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
