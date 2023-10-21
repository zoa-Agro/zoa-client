import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateModal = ({ uproduct,refetch }) => {
 
  const id = uproduct?._id;
  const [axiosSecure]=useAxiosSecure()
  const {
  
    control,
    formState,
    handleSubmit,
    setValue, getValues,
    reset
    
  } = useForm();
  const { isDirty } = formState;
  const isAnyFieldUpdated = isDirty || Object.values(getValues()).some(Boolean);

  const onSubmit=(data)=>{
     axiosSecure.patch(`/update-product/${id}`, { data }).then((res) => { refetch();
      if (res.status === 200) {
        Swal.fire({position: 'top-end',
        icon: 'success',
        title: 'Your has has been Updated',
        confirmButtonText: "Ok",
        });
      }
    })
   
  }

  return (
    <dialog id="my_modal_6" className="modal">
      <div className="modal-box w-11/12  max-w-3xl">
        <form   onSubmit={handleSubmit(onSubmit)} >
          <div className="flex space-x-10 items-center justify-center">

          
          <div className="">
            <img
              src={uproduct?.image}
              className="w-[150px] h-[150px] mask mask-squircle object-cover object-center"
              alt="" />
              <h2 className="text-center font-semibold text-lg">{uproduct?.name}</h2>
          </div>
          <div className=" md:flex gap-5 space-y-4 md:space-y-0">
          <div className="form-control">
        <label>Price: {uproduct?.price} Tk</label>
        <Controller
          name="price"
          control={control}
         
          defaultValue=""
          render={({ field }) => <input {...field} type="number" placeholder="Enter updated Price"   className="input input-bordered text-sm font-medium mt-2"/>}
        />
      </div>

      <div className="form-control">
        <label>Quantity: {uproduct?.available_quantity}</label>
        <Controller
          name="quantity"
          control={control}
       
          defaultValue=""
          render={({ field }) => <input {...field} type="number"  placeholder="Enter updated Quantity"  className="input input-bordered text-sm font-medium mt-2" />}
        />
      </div>
            
          </div>
          </div>
          <div className="text-center">
          <button type="submit" disabled={!isAnyFieldUpdated} className="btn px-4 w-1/3  bg-[#6bb42f] border text-white hover:border-[#6bb42f] hover:text-[#6bb42f]  font-bold p-2">
        Update
      </button>
          {/* <input
          type="submit"
          disabled={disable}
          className="btn px-4 w-1/3  bg-[#6bb42f] border text-white hover:border-[#6bb42f] hover:text-[#6bb42f]  font-bold p-2"
          value="Update product"
        /> */}
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={()=>reset()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl bg-red-500 text-white">
              ✕
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateModal;
