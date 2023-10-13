import React from 'react';

const ModalComponent = ({modalProduct}) => {
    console.log(modalProduct);
    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <img src={modalProduct} alt="" />
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    );
};

export default ModalComponent;