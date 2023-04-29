import React from "react";
import Data from "./Data";
import { BsPencilSquare } from "react-icons/bs";
const ShowOrderMenu = (props) => {
  const products = props.billProducts.reverse().map((bill) => {
    const product = Data.filter((product) => product.id === bill.product_id)[0];
    
    console.log(props.billProducts.length)
    return (
      <div className="each-order" key={Math.random()}>
        <div>
          <img src={product.Image} className="menu-img" alt={product.name}/>
        </div>
        <div className="order-name-container">
          <p className="order-name">{product.name}</p>
          <div className="order-price">{bill.price}</div>
        </div>
        <div>
          <div className="total-each-price">
            <span className="quantity">×{bill.quantity}</span>
            {bill.total}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="menu-container">
      <div className="menu-header">
        {products.map((product) => product.price)}
        <p>Order Menu</p>
        {/* <BsPencilSquare className="order-icon" /> */}
      </div>
      <div className="menu-content">
        {products}
        <div className="total-price-container">
          <div>Total Sub</div>
          <div>
            {props.billProducts
              .map((product) => product.total)
              .reduce((current, element) => {
                return current + element;
              }, 0)}
          </div>
        </div>
      </div>
      <div className="charge-btn-parent">
        <button
          className="charge-btn"
          onClick={() => {
            if(props.billProducts.length > 0){
              props.charge();
            props.saveInLocal();
            }else{
              return false
            }
            
          }}
        >
          Charge $
          {props.billProducts
            .map((product) => product.total)
            .reduce((current, element) => {
              return current + element;
            }, 0)}
        </button>
      </div>
    </div>
  );
};

export default ShowOrderMenu;
