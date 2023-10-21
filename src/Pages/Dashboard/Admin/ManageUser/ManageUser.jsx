import React from "react";
import useUsers from "../../../../hooks/useUsers";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageUser = () => {
  const [users, refetch] = useUsers();
  const [axiosSecure] = useAxiosSecure();
  const handleMakeSeller = (user) => {
    axiosSecure.patch(`/users/seller/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
      }
    });
  };
  const handleMakeUser = (user) => {
    axiosSecure.patch(`/users/user/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
      }
    });
  };
  return (
    <div className="w-11/12 mx-auto">
    <h2 className="text-center font-medium text-3xl md:text-4xl my-5">
      <span className="text-[#6bb42f] font-extrabold text-3xl md:text-5xl">|</span> Manage Users{" "}
      <span className="text-[#6bb42f] font-extrabold text-3xl md:text-5xl">|</span>
    </h2>
    <div className="overflow-auto  mt-10">
      <table className=" table-xs md:table-md table-pin-rows w-full mx-auto table-pin-cols">
        {/* head */}
        <thead>
          <tr className="text-[15px] text-white text-center bg-[#6bb42f]">
            <th className="hidden md:block"></th>
            <th className="">User Name</th>
            <th className="">Email</th>
            <th className="">Role</th>
            <th className="">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users?.map((user, index) => (
            <tr key={user._id} className="hover text-[16px] border-b border-slate-300">
              <td className="text-center hidden md:block ">{index + 1}</td>
              <td className="text-center ">{user?.name}</td>
              <td className="text-center ">{user?.email}</td>
              <td className="text-center ">
                {user?.role == "admin"
                  ? "Admin"
                  : user?.role == "seller"
                  ? "Seller"
                  : "User"}
              </td>
              <td className="md:flex justify-center py-2 space-y-2 md:space-y-0 md:space-x-2 text-center ">
                <button
                  onClick={() => handleMakeSeller(user)}
                  disabled={user?.role === "seller"}
                  className="btn btn-xs btn-success"
                >
                  Make Seller
                </button>{" "}
                <button
                  onClick={() => handleMakeUser(user)}
                  disabled={user?.role === "user"}
                  className="btn btn-xs px-4 btn-warning"
                >
                  Make User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  );
};

export default ManageUser;
