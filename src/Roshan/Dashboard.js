import React from "react";
import "../index.css";
import Card from "./components/Card";
import {
  FaEye,
  FaCaretRight,
  FaCartArrowDown,
  FaShoppingBag,
  FaUserFriends,
} from "react-icons/fa";

import Charts from "react-apexcharts";

import girl from "../components/images/girl.jpg";

const Dashboard = () => {
  // Bar chart
  const series = [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["S", "M", "T", "W", "T", "F", "S"],
    },
    // yaxis: {
    //   title: {
    //     text: "$ (thousands)",
    //   },
    // },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };

  const series2 = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];
  const options2 = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <>
      <div className="container-fluid container_main">
        <div className="row">
          <div className="col-sm-8 col-12">
            <div className="row">
              <div className="col-12 col-md-6 py-md-4 py-2">
                <Card
                  Icon={FaEye}
                  color="#3661eb"
                  background="white"
                  bgColor="#3661eb"
                  value="3.456K"
                  text="Total views"
                  Arrow={FaCaretRight}
                  textCol="white"
                  arrowCol="white"
                />
              </div>
              <div className="col-12 col-md-6 py-md-4 py-2">
                <Card
                  Icon={FaCartArrowDown}
                  background="#ebf0fe"
                  bgColor="white"
                  color="#3661eb"
                  value="3.456K"
                  text="Total views"
                  Arrow={FaCaretRight}
                  textCol="black"
                  arrowCol="black"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 py-md-4 py-2">
                <Card
                  Icon={FaShoppingBag}
                  background="#ebf0fe"
                  bgColor="white"
                  color="#3661eb"
                  value="3.456K"
                  text="Total views"
                  Arrow={FaCaretRight}
                  textCol="black"
                  arrowCol="black"
                />
              </div>
              <div className="col-12 col-md-6 py-md-4 py-2">
                <Card
                  Icon={FaUserFriends}
                  background="#ebf0fe"
                  bgColor="white"
                  color="#3661eb"
                  value="3.456K"
                  text="Total views"
                  Arrow={FaCaretRight}
                  textCol="black"
                  arrowCol="black"
                />
              </div>
            </div>
            {/* Main chart  */}
            <div className="row">
              <div className="col-12 col-sm-12 py-4">
                <div className="main_chart m-auto">
                  <Charts
                    options={options2}
                    series={series2}
                    type="area"
                    height={350}
                  />
                </div>
              </div>
            </div>
            {/* Main chart end  */}
          </div>

          <div className="col-sm-4 col-12">
            <div className="row">
              {/* Bar chart start  */}
              <div className="col-12 col-md-12 py-4">
                <div className="chat_card">
                  <Charts
                    options={options}
                    series={series}
                    type="bar"
                    height={350}
                  />
                </div>
              </div>
              {/* Bar chart end  */}

              {/* Char section   */}
              <div className="col-12 col-md-12 py-4">
                <div className="chat_card">
                  <div className="d-flex justify-content-evenly">
                    <h5>Activity</h5>
                    <h6 className="text-primary">See more</h6>
                  </div>
                  <div className="d-flex py-2 justify-content-evenly">
                    <div>
                      <img className="profile_pic" src={girl} alt=".." />
                    </div>
                    <div className="">
                      <h6 className=" text-black">Saske Uchiha</h6>
                      <h6 className="text-black-50">Uchiha</h6>
                    </div>
                    <div className="px-4 text-black-50">12pm</div>
                  </div>
                  <div className=" py-2 d-flex justify-content-evenly">
                    <div>
                      <img className="profile_pic" src={girl} alt=".." />
                    </div>
                    <div className="">
                      <h6 className=" text-black">Saske Uchiha</h6>
                      <h6 className="text-black-50">Uchiha</h6>
                    </div>
                    <div className="px-4 text-black-50">10pm</div>
                  </div>
                </div>
              </div>
              {/* Chat section end  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// /<img className="profile_pic" src={girl2} alt=".." />

export default Dashboard;
