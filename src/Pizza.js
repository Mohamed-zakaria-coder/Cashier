import React from "react";

const Pizza = (props) => {
  return (
    <div className="pizza-parent" onClick={() => props.click(props.id)}>
      <div className="each">
        <div className="img-container">
          <img
            src={props.img}
            
            className="pizza-img"
            alt="pizza-img"
          />
        </div>
        <p>{`${props.name[0].toUpperCase()}${props.name.slice(1)}`}</p>
        <div className="select-holder">
          <div className="name-price">
            {props.size.map((e) => {
              return (
                <h6 key={Math.random()}>
                  {e.name} = {e.price}$
                </h6>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
