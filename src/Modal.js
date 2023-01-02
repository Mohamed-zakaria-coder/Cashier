import React from "react";
const Modal = (props) => {
  return (
    <div className="modal-container">
      <div className="one" onClick={() => null}>
        <span className="close" onClick={() => props.handleClose()}>
          X
        </span>
        <div>
          <div>
            <div className="img-container">
              <img src={props.selectedPizza.Image} className="small-img" />
            </div>
            <h5 className="head-name">{props.selectedPizza.name}</h5>
            <div>
              <select onChange={props.handleChangePrice} className="select">
                {props.selectedPizza.size.map((e) => {
                  return (
                    <option key={props.id} value={e.price}>
                      Size: {e.name}- Price: {e.price}$
                    </option>
                  );
                })}
              </select>

              <select className="select-number" onChange={props.handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <div className="total-container">
                <span className="span-price">
                  Total = {props.selectedQuantity * props.selectedPrice}
                </span>
              </div>
            </div>
            <button
              className="add-product"
              onClick={() => {
                props.setBillProducts((prev) => [
                  ...prev,
                  {
                    product_id: props.selectedPizza.id,
                    quantity: Number(props.selectedQuantity),
                    price: Number(props.selectedPrice),
                    total: props.selectedQuantity * props.selectedPrice,
                  },
                ]);
                props.setShowBill((prev) => !prev);
              }}
            >
              ِAdd
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
