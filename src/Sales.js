import React from "react";
import Data from "./Data";
const Sales = () => {
  const bills = JSON.parse(localStorage.getItem("bills"));
  const TotalSales =
    bills !== null
      && [...bills].reverse().map((bill) => {
          const productIds = bill.products.map((bill) => bill.product_id);
          const billProducts = productIds.map((productId) => {
            return Data.filter((product) => product.id === productId)[0];
          });
          return (
            <tr className="table-body" key={Math.random()}>
              <td>
                {billProducts.map((e) => (
                  <p className="bill-name">{e.name[0].toUpperCase()+e.name.slice(1)}</p>
                ))}
              </td>
              <td>
                {bill.products.map((bill) => (
                  <p className="bill-price">{bill.price}$</p>
                ))}
              </td>
              <td>
                {bill.products.map((bill) => (
                  <p className="bill-quantity"> {bill.quantity} </p>
                ))}
              </td>
              <td>
                {bill.products.map((bill) => (
                  <p className="bill-total">{bill.total}$</p>
                ))}
              </td>
              <td className="bill-date">{bill.date}</td>
            </tr>
          );
        })
      ;

  return (
    <div className="sales-parent">
      {bills != null ? (
        <>
          {" "}
          <div className="sales-header">
            <caption className="sales-caption">Sales Statistics</caption>
            <div>
              <h4>Total Earnings</h4>
              <h3>
                {bills &&
                  bills
                    .map((bill) => bill.products.map((bill) => bill.total))
                    .map(
                      (bill) =>
                        bill.length &&
                        [...bill].reduce((prev, curr) => prev + curr),
                      0
                    )
                    .reduce((prev, curr) => {
                      return Number(prev) + Number(curr);
                    }, 0) + "$"}
              </h3>
            </div>
          </div>{" "}
          <table className="sales-table">
            {" "}
            <thead>
              <tr className="table-head">
                <th>Product name</th>
                <th>Product price</th>
                <th>Product quantity</th>
                <th>Total price</th>
                <th>Date</th>
              </tr>
            </thead>{" "}
            <tbody> {TotalSales}</tbody>
          </table>{" "}
        </>
      ) : (
        <h2 className="no-bills">There Are No Bills</h2>
      )}
    </div>
  );
};

export default Sales;
