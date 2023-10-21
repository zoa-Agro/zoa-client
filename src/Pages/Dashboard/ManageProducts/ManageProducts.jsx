import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaRegTrashAlt } from "react-icons/fa";
import { RxPencil2 } from "react-icons/rx";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import UpdateModal from "./updateModal";

const ManageProducts = () => {
  const { user } = useAuth();
  const [uproduct, setProduct] = useState();
  const [axiosSecure] = useAxiosSecure();

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products", user],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products?email=${user?.email}`);
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

  return (
    <div className="w-full p-5">
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-[15px] text-white  bg-[#6bb42f]">
              <th></th>
              <th>Picture / Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th className="md:ps-10">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product, index) => (
              <tr key={product._id} className="hover:shadow hover:bg-[#dfffc4]">
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-16">
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
                <td>
                  <h3>{product?.available_quantity}</h3>
                </td>
                <td>Tk {product?.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-ghost btn-circle text-red-500 text-xl"
                  >
                    <FaRegTrashAlt />
                  </button>
                  <button htmlFor="my_modal_6"
                    onClick={() => handleUpdate(product)}
                    className="btn btn-ghost btn-circle text-success text-xl"
                  >
                    <RxPencil2 />
                  </button>
                  <UpdateModal uproduct={ uproduct} refetch={refetch}/>
                </th>
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
