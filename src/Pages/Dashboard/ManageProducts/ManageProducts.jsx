import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaRegTrashAlt } from "react-icons/fa";
import { RxPencil2 } from "react-icons/rx";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import UpdateModal from "./updateModal";
import { Spinner } from "react-spinners-css";

const ManageProducts = () => {
  const { user } = useAuth();
  const [uproduct, setProduct] = useState();
  const [axiosSecure] = useAxiosSecure();
  const [loading,setLoading]=useState(true)

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products", user,setLoading],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products?email=${user?.email}`);
      setLoading(false)
      return res.data;
    },
  });
  // delete product
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-product/${id}`, {}).then((res) => {
          refetch();
          if (res.status === 200) {
            Swal.fire("Deleted!", "Your product has been deleted.", "success");
          }
        });
      }
    });
  };
  // update product
  const handleUpdate = (product) => {
    setProduct(product);
    document.getElementById("my_modal_6").showModal();
  };
if(loading){
  return <Spinner color='#6bb42f'/>
}
  return (
<div className="w-11/12 mx-auto my-10">
  <div className="overflow-auto">
   
  <table className=" table-xs md:table-md table-pin-rows w-full mx-auto table-pin-cols">
        {/* head */}
        <thead>
          <tr className="text-[15px] text-white bg-[#6bb42f]">
            <th className="hidden md:block "></th>
            <th className="text-center">Picture / Name</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Price</th>
            <th className="text-center ">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id} className="hover:shadow hover:bg-[#dfffc4]">
              <td className="hidden md:block">{index + 1}</td>
              <td className="text-center ">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 md:w-16 h-12 md:h-16">
                      <img
                        src={product.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product?.name}</div>
                  </div>
                </div>
              </td>
              <td className="text-center ">
                <h3>{product?.available_quantity}</h3>
              </td>
              <td className="text-center " >Tk {product?.price}</td>
              <td className="flex items-center mt-2 md:mt-4 justify-center ">
                <div className="flex items-center ">
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn-sm btn-ghost btn-circle text-red-500 text-sm md:text-xl flex justify-center items-center"
                >
                  <FaRegTrashAlt />
                </button>
                <button
                  onClick={() => handleUpdate(product)}
                  className="btn-sm btn-ghost btn-circle text-success text-sm md:text-xl flex justify-center items-center"
                >
                  <RxPencil2 />
                </button>
                </div>
              
                <UpdateModal uproduct={uproduct} refetch={refetch} />
              </td>
              {/* modal for update product */}
            </tr>
          ))}
        </tbody>
      </table>
   
  </div>
</div>

  );
};
export default ManageProducts;
