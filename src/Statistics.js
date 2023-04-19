import React from "react";
import { Pie, Line } from "react-chartjs-2";
import "chart.js/auto";
import Data, { categories } from "./Data";

const Statistics = () => {
  const bills = JSON.parse(localStorage.getItem("bills"));
  const totalEarnings =
    bills &&
    bills
      .map((bill) => bill.products.map((bill) => bill.total))
      .map(
        (bill) => bill.length > 0 && [...bill].reduce((prev, curr) => prev + curr),
        0
      )
      .reduce((prev, curr) => {
       return Number(prev) + Number(curr)!==false && Number(prev) + Number(curr);
      }, 0);

  const date = new Date();
  function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1);
  }
  const productsQantityTotal = Data.map((product) => {
    return {
      id: product.id,
      quantity: 0,
      total: 0,
      productName: product.name,
      img: product.Image,
      categoryId: product.category_id,
    };
  });
  const billDate =
    bills &&
    bills.map((bill) => {
      return {
        date: bill.date.slice(0, 10),
        total: 0,
      };
    });

  const billDateEachDay =
    bills && new Set(billDate.map((bill) => JSON.stringify(bill)));

  const parseInbillDateEachDay =
    bills && Array.from(billDateEachDay).map((bill) => JSON.parse(bill));

  bills &&
    bills.map((bill) =>
      bill.products.map((product) => {
        const totalEarningsDay = parseInbillDateEachDay.filter(
          (parseDate) => parseDate.date === bill.date.slice(0, 10)
        )[0];
        totalEarningsDay.total += product.total;
      })
    );
  bills &&
    bills.map((bill) =>
      bill.products.map((sale) => {
        const theProduct = productsQantityTotal.filter(
          (product) => product.id === sale.product_id
        )[0];
        theProduct.quantity += sale.quantity;
        theProduct.total += sale.total;
      })
    );

  const firstDayCurrentMonth = getFirstDayOfMonth(
    date.getFullYear(),
    date.getMonth()
  );
  var start = new Date();
  start.setHours(0, 0, 0, 0);
  const DateOfTheDayArr =
    bills && bills.filter((bill) => bill.date > start.toISOString());
  const totalEarningsOfTheDay =
    DateOfTheDayArr &&
    DateOfTheDayArr.map((bill) => bill.products.map((product) => product.total))
      .map(
        (bill) => bill.length > 0 && [...bill].reduce((prev, curr) => prev + curr)
      )
      .reduce((prev, curr) => {
        return Number(prev) + Number(curr) !== false && Number(prev) + Number(curr);
      });
  const totalMonthEarningsArr =
    bills &&
    bills.filter((bill) => bill.date >= firstDayCurrentMonth.toISOString());
  const totalMonthEarnings =
    totalMonthEarningsArr &&
    totalMonthEarningsArr
      .map((bill) => bill.products.map((product) => product.total))
      .map(
        (bill) => bill.length > 0 && [...bill].reduce((prev, curr) => prev + curr)
      )
      .reduce((prev, curr) => {
        return Number(prev) + Number(curr) !== false && Number(prev) + Number(curr);
      });

  bills &&
    bills.map((bill) =>
      bill.products.map((sale) => {
        const theProduct = productsQantityTotal.filter(
          (product) => product.id === sale.product_id
        )[0];
        theProduct.quantity += sale.quantity;
        theProduct.total += sale.total;
      })
    );

  const sortQuantity = productsQantityTotal.sort((a, b) =>
    a.quantity > b.quantity ? 1 : -1
  );
  const bestProductsQuantity = sortQuantity.map((product) => {
    return {
      bestQuantity: product.quantity,
      bestQuantityName: product.productName,
      bestQuantityImg: product.img,
    };
  });

  const bestQuantityName = bestProductsQuantity.map(
    (product) => product.bestQuantityName
  );
  const bestQuantityImg = bestProductsQuantity.map(
    (product) => product.bestQuantityImg
  );
  const quantity = bestProductsQuantity.map((product) => product.bestQuantity);
  const sortTotal = productsQantityTotal.sort((a, b) =>
    a.total > b.total ? 1 : -1
  );

  const bestProductsTotal = sortTotal.map((product) => {
    return {
      bestTtoal: product.total,
      productName: product.productName,
      img: product.img,
    };
  });
  const total = bestProductsTotal.map((product) => product.bestTtoal);
  const bestTotalName = bestProductsTotal.map((product) => product.productName);
  const bestTotalImg = bestProductsTotal.map((product) => product.img);

  const QuantityIteration = (i) => {
    return (
      <div className="best-quantity-parent">
        <img
          src={bestQuantityImg[sortQuantity.length - i]}
          className="best-quantity-img"
        />
        <div className="best-total-quantity-name">
          {bestQuantityName[sortQuantity.length - i]}
        </div>
        <div className="sold-units">
          <h3>Sold Units</h3>
          <h2 className="top-total-quantity-products">
            {quantity[quantity.length - i]}
          </h2>
        </div>
      </div>
    );

    // for(var i = 1 ; i <= 5; i++){
    // return ( <h2 className='top-total-quantity-products'>{quantity[quantity.length - i]}</h2> )
    //   }
  };
  const totalIteration = (i) => {
    return (
      <div className="best-total-parent">
        <img
          src={bestTotalImg[sortTotal.length - i]}
          className="best-total-img"
        />
        <div className="best-total-quantity-name">
          {bestTotalName[sortTotal.length - i]}
        </div>
        <div className="total-profit">
          <h3>Total Profit</h3>
          <h2 className="top-total-quantity-products">
            {total[total.length - i]}
          </h2>
        </div>
      </div>
    );

    // for(var i = 1 ; i <= 5; i++){
    // return ( <h2 className='top-total-quantity-products'>{quantity[quantity.length - i]}</h2> )
    //   }
  };
  const state1 = {
    labels:
      parseInbillDateEachDay && parseInbillDateEachDay.map((date) => date.date),
    datasets: [
      {
        label: "Total Earnings",
        backgroundColor: "rgb(75, 192, 192)",
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data:
          parseInbillDateEachDay && parseInbillDateEachDay.map((e) => e.total),
      },
    ],
  };

  const categoriesFilter = categories.map((category) => {
    return {
      quantity: 0,
      categoryId: category.id,
      categoryName: category.name,
    };
  });
  sortQuantity.map((product) => {
    const theQuantityProduct = categoriesFilter.filter(
      (category) => category.categoryId === product.categoryId
    )[0];

    theQuantityProduct.quantity += product.quantity;
  });

  const data = {
    labels: categoriesFilter.map((category) => category.categoryName),
    datasets: [
      {
        label: "# of Votes",
        data: categoriesFilter.map((category) => category.quantity),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="statistics-parent">
      <div className="total-earnings-parent">
        <div className="total-earnings">
          <div>Total Earnings</div>
          <div>{totalEarnings > 0 ? `$${totalEarnings}` : 0}</div>
        </div>
        <div className="total-earnings">
          <div>Month Earnings</div>
          <div>{totalMonthEarnings > 0 ? `$${totalMonthEarnings}` : 0}</div>
        </div>
        <div className="total-earnings">
          <div>Today Earnings</div>
          <div>
            {totalEarningsOfTheDay > 0 ? `$${totalEarningsOfTheDay}` : 0}
          </div>
        </div>
      </div>
      <div className="stats-container">
        <div className="pie-chart">
          <Pie data={data} />
        </div>
        <div className="line-chart">
          <Line
            data={state1}
            options={{
              title: {
                display: true,
                text: "Today earnings",
                fontSize: 20,
              },
              legend: {
                display: true,
              },
            }}
          />
        </div>
      </div>
      <div className="top-products-parent">
        <div className="best-products-holder">
          <div className="best-quantity-container">
            <div>
              <h3 className="best-popular-product">Most Popular Products</h3>
            </div>
            {QuantityIteration(1)}
            {QuantityIteration(2)}
            {QuantityIteration(3)}
            {QuantityIteration(4)}
            {QuantityIteration(5)}
          </div>
          <div className="best-total-container">
            <div className="haedings-parent">
              <h3 className="most-profitable-products">
                Most profitable products
              </h3>
            </div>
            {totalIteration(1)}
            {totalIteration(2)}
            {totalIteration(3)}
            {totalIteration(4)}
            {totalIteration(5)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
