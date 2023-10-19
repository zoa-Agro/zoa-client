import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ModalComponent = ({modalProduct}) => {
    console.log(modalProduct);
    return (
        <dialog id="my_modal_5" className="modal  ">
  <div className="modal-box w-11/12 max-w-5xl">
    <div className='md:flex items-center gap-10'> 
    <img src={modalProduct?.image} className='md:w-[400px]' alt="" />
    <div>
    <h2 className='text-2xl font-bold'>{modalProduct?.name}</h2>
    <del className='text-sm text-red-500'>Tk{(modalProduct?.price+5).toFixed(2)}</del>
    <h2 className='text-xl text-[#6bb42f] font-semibold'>Tk {modalProduct?.price}</h2>
    <p className='text-black'>{modalProduct?.description}</p>
    <div className="form-control mt-5">
  <label className="label ">
    <span className="label-text text-lg">Quantity</span>
  </label>
  <label className="input-group">
    <input type="number" defaultValue={1} className="input input-bordered text-black w-1/4" />
    <button className="rounded-r-3xl text-white   font-medium bg-[#6bb42f] p-3 py-1 flex items-center gap-1 text-lg cursor-pointer"> <AiOutlineShoppingCart />Add to Cart</button>
  </label>
</div>
   
    </div>

    </div>
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl bg-red-500 text-white">✕</button>
    </form>
    
    
  </div>
</dialog>
    );
};

export default ModalComponent;