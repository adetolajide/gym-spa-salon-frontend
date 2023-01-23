import BarChart from "./barchart";
import DoughnutChart from "./doughnutchart";
import LineChart from "./linechart";
import React from "react";

// import LineChart from "./linechart";
// import DoChart from "./do";
// import BarChart from "./barchart";

interface Props {
  client: string;
  service: string;
  staff: string;
  date: string;
}

const TableItem: React.FC<Props> = ({ client, service, staff, date }) => {
  return (
    <div className="border-black_500 border-b grid grid-cols-5 py-5 px-4">
      <p className="">{client}</p>
      <p className="text-center">{service}</p>
      <p className="text-center">{staff}</p>
      <p className="text-center">{date}</p>
      <p className="text-success_800 text-center cursor-pointer">
        More info <i className="bi bi-chevron-right"></i>
      </p>
    </div>
  );
};

const Content: React.FC = () => {
  return (
    <section className="h-screen overflow-scroll pb-24 px-2">
      <div className="top-cards grid grid-cols-3 gap-x-4">
        <div className="card w-full border-primary_500 border-x border-y bg-white py-4 px-6 rounded-md flex items-center gap-x-4">
          <div className="bg-primary_500 rounded-full w-max text-white  p-3">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.60212 7.00112C9.17947 7.00112 10.4582 5.72243 10.4582 4.14509C10.4582 2.56775 9.17947 1.28906 7.60212 1.28906C6.02478 1.28906 4.74609 2.56775 4.74609 4.14509C4.74609 5.72243 6.02478 7.00112 7.60212 7.00112Z"
                stroke="white"
                strokeWidth="0.856809"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.69531 12.7172C2.69531 10.5066 4.89445 8.71875 7.60197 8.71875C8.15033 8.71875 8.68156 8.793 9.1785 8.93009"
                stroke="white"
                strokeWidth="0.856809"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3118 10.4333C13.3118 10.616 13.289 10.7931 13.2433 10.9645C13.1919 11.193 13.1005 11.4157 12.9805 11.6099C12.5864 12.2725 11.861 12.7181 11.027 12.7181C10.4387 12.7181 9.90745 12.4953 9.5076 12.1297C9.33624 11.9812 9.18772 11.8042 9.07348 11.6099C8.86213 11.2672 8.74219 10.8617 8.74219 10.4333C8.74219 9.81636 8.98781 9.25088 9.38765 8.83961C9.80463 8.4112 10.3873 8.14844 11.027 8.14844C11.701 8.14844 12.3122 8.43976 12.7235 8.90815C13.0891 9.31371 13.3118 9.85063 13.3118 10.4333Z"
                stroke="white"
                strokeWidth="0.856809"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.8819 10.4219H10.1797"
                stroke="#F2FAFF"
                strokeWidth="0.856809"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.0312 9.58594V11.2938"
                stroke="#F2FAFF"
                strokeWidth="0.856809"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span>
            <p className="font-medium py-1">Registered Members</p>
            <p className="font-normal text-xs">300 total registrations</p>
          </span>
        </div>
        <div className="card border-success_700 border-x border-y bg-white py-4 px-6 rounded-md w-full flex items-center gap-x-4">
          <div className="bg-success_700 rounded-full w-max text-white  p-3">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.60212 7.00112C9.17947 7.00112 10.4582 5.72243 10.4582 4.14509C10.4582 2.56775 9.17947 1.28906 7.60212 1.28906C6.02478 1.28906 4.74609 2.56775 4.74609 4.14509C4.74609 5.72243 6.02478 7.00112 7.60212 7.00112Z"
                stroke="white"
                strokeWidth="0.856809"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.69531 12.7172C2.69531 10.5066 4.89445 8.71875 7.60197 8.71875C8.15033 8.71875 8.68156 8.793 9.1785 8.93009"
                stroke="white"
                strokeWidth="0.856809"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3118 10.4333C13.3118 10.616 13.289 10.7931 13.2433 10.9645C13.1919 11.193 13.1005 11.4157 12.9805 11.6099C12.5864 12.2725 11.861 12.7181 11.027 12.7181C10.4387 12.7181 9.90745 12.4953 9.5076 12.1297C9.33624 11.9812 9.18772 11.8042 9.07348 11.6099C8.86213 11.2672 8.74219 10.8617 8.74219 10.4333C8.74219 9.81636 8.98781 9.25088 9.38765 8.83961C9.80463 8.4112 10.3873 8.14844 11.027 8.14844C11.701 8.14844 12.3122 8.43976 12.7235 8.90815C13.0891 9.31371 13.3118 9.85063 13.3118 10.4333Z"
                stroke="white"
                strokeWidth="0.856809"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.8819 10.4219H10.1797"
                stroke="#F2FAFF"
                strokeWidth="0.856809"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.0312 9.58594V11.2938"
                stroke="#F2FAFF"
                strokeWidth="0.856809"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span>
            <p className="font-medium py-1">Active Members</p>
            <p className="font-normal text-xs">224 active accounts</p>
          </span>
        </div>
        <div className="card border-warning_700 border-x border-y bg-white py-4 px-6 rounded-md w-full flex items-center gap-x-4">
          <div className="bg-warning_700 rounded-full w-max text-white  p-3">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.60212 7.00112C9.17947 7.00112 10.4582 5.72243 10.4582 4.14509C10.4582 2.56775 9.17947 1.28906 7.60212 1.28906C6.02478 1.28906 4.74609 2.56775 4.74609 4.14509C4.74609 5.72243 6.02478 7.00112 7.60212 7.00112Z"
                stroke="white"
                strokeWidth="0.856809"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.69531 12.7172C2.69531 10.5066 4.89445 8.71875 7.60197 8.71875C8.15033 8.71875 8.68156 8.793 9.1785 8.93009"
                stroke="white"
                strokeWidth="0.856809"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3118 10.4333C13.3118 10.616 13.289 10.7931 13.2433 10.9645C13.1919 11.193 13.1005 11.4157 12.9805 11.6099C12.5864 12.2725 11.861 12.7181 11.027 12.7181C10.4387 12.7181 9.90745 12.4953 9.5076 12.1297C9.33624 11.9812 9.18772 11.8042 9.07348 11.6099C8.86213 11.2672 8.74219 10.8617 8.74219 10.4333C8.74219 9.81636 8.98781 9.25088 9.38765 8.83961C9.80463 8.4112 10.3873 8.14844 11.027 8.14844C11.701 8.14844 12.3122 8.43976 12.7235 8.90815C13.0891 9.31371 13.3118 9.85063 13.3118 10.4333Z"
                stroke="white"
                strokeWidth="0.856809"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.8819 10.4219H10.1797"
                stroke="#F2FAFF"
                strokeWidth="0.856809"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.0312 9.58594V11.2938"
                stroke="#F2FAFF"
                strokeWidth="0.856809"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span>
            <p className="font-medium py-1">Inactive members</p>
            <p className="font-normal text-xs">76 inactive accounts</p>
          </span>
        </div>
      </div>
      <div className="chart shadow-200 my-4 px-6 py-4 rounded-md bg-white w-full ">
        <p className="font-normal text-lg">Branch : Wuse zone 6</p>
        <div className="flex justify-between">
          <p className="text-xs py-1">Business Health Statistics</p>

          <div className="text-xs flex gap-x-4">
            <span className="flex items-center gap-x-1">
              <p className="bg-success_700 rounded-sm px-2 py-1"></p>
              <p>Profit</p>
            </span>
            <span className="flex items-center gap-x-1">
              <p className="bg-warning_700 rounded-sm px-2 py-1"></p>
              <p>Income</p>
            </span>
            <span className="flex items-center gap-x-1">
              <p className="bg-error_800 rounded-sm px-2 py-1"></p>
              <p>Expenses</p>
            </span>

            <button className="flex items-center rounded ml-4 py-1 px-4 text-primary_800 border-x border-y border-primary_800 gap-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3186 19.0678C14.3186 19.6778 13.9186 20.4778 13.4086 20.7878L11.9986 21.6978C10.6886 22.5078 8.86859 21.5978 8.86859 19.9778V14.6278C8.86859 13.9178 8.46859 13.0078 8.05859 12.5078L4.21857 8.4678C3.70857 7.9578 3.30859 7.05781 3.30859 6.44781V4.12781C3.30859 2.91781 4.21861 2.00781 5.32861 2.00781H18.6686C19.7786 2.00781 20.6886 2.9178 20.6886 4.0278V6.2478C20.6886 7.0578 20.1786 8.06781 19.6786 8.56781"
                  stroke="#054D99"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.0711 16.5172C17.8384 16.5172 19.2711 15.0845 19.2711 13.3172C19.2711 11.5499 17.8384 10.1172 16.0711 10.1172C14.3038 10.1172 12.8711 11.5499 12.8711 13.3172C12.8711 15.0845 14.3038 16.5172 16.0711 16.5172Z"
                  stroke="#054D99"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.8711 17.1172L18.8711 16.1172"
                  stroke="#054D99"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Filter</p>
            </button>
          </div>
        </div>{" "}
        <section className="w-11/12 my-3 mx-auto">
          <LineChart />
        </section>
      </div>

      <section className="grid grid-cols-[5fr_2fr] gap-x-8">
        <div className="chart2 shadow-200 my-4 px-6 py-4 rounded-md bg-white ">
          <p className="font-normal ">SALES INSIGHTS</p>
          <div className="flex justify-between">
            <div className="chart w-8/12 flex justify-center items-center">
              <BarChart />
            </div>
            <div className="bg-neutral_900 p-4 rounded">
              <div className="item text-xs">
                <p className="text-black_600">Total sales this week</p>
                <p className="text-success_800 py-1">+13%</p>
              </div>
              <div className="item text-xs py-1">
                <p className="text-black_600">Deliveries</p>
                <p className="text-success_800 py-1">+6%</p>
              </div>
              <div className="item text-xs py-1">
                <p className="text-black_600">Pickups</p>
                <p className="text-success_800 py-1">+26%</p>
              </div>
              <div className="item text-xs py-1">
                <p className="text-black_600">Average customer bill</p>
                <p className="text-success_800 py-1">N15,000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center shadow-200 my-4 px-4 py-4 rounded-md bg-white ">
          <p className="font-normal ">CUSTOMER INSIGHTS</p>
          <div className="w-24 relative mx-auto my-4 flex">
            <DoughnutChart />
            <p className="absolute top-10 ml-8 text-xs text-primary_800">
              56% +
            </p>
          </div>{" "}
          <p className="text-xs my-4 mx-6">
            Customers registration in the past month
          </p>
          <button className="text-primary_800 px-4 py-2 my-2 rounded-md text-sm font-normal border-y border-x border-primary_800">
            View more
          </button>
        </div>
      </section>

      <section className="table bg-white shadow-200 rounded-lg py-8 px-8  w-full">
        <div className="flex items-center justify-between">
          <p className="font-medium text-lg text-primary_800">SCHEDULES</p>
          <span className="block relative">
            <select
              className="form-select appearance-none block w-full
  text-gray-700 bg-neutral_900 text-xs rounded-md py-2 pl-4 pr-8  outline-none transition ease-in-out m-0 "
              aria-label="Default select example"
            >
              <option className="truncate" selected>
                Today
              </option>
            </select>

            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className="absolute right-2 ml- top-2 "
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1106 6.84375L9.49229 11.4621C8.94688 12.0075 8.05438 12.0075 7.50896 11.4621L2.89062 6.84375"
                stroke="#363B43"
                strokeWidth="1.0625"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <div className="w-full mt-6 text-xs h-96 overflow-y-hidden">
          {/* <div className=""> */}
          <div className="bg-neutral_900 rounded my-2 mr-8 grid grid-cols-5 py-3 px-4">
            <p className=" ">Name of Client</p>
            <p className="text-center">Service</p>
            <p className="text-center">Assigned Staff</p>
            <p className="text-center">Appointment Date</p>
            <p></p>
            {/* </tr> */}
          </div>
          <section className="text-black_800 pr-8 py-2 font-medium h-custom_95 overflow-y-scroll ">
            <TableItem
              client="Bucky Barnes"
              service="Massage and Pedicure"
              staff="Mittie Sanchez"
              date="27th June, 2022"
            />
            <TableItem
              client="Jean Andrews"
              service="Massage and Pedicure"
              staff="Catherine Thornton"
              date="27th June, 2022"
            />
            <TableItem
              client="Bucky Barnes"
              service="Massage and Pedicure"
              staff="Mittie Sanchez"
              date="27th June, 2022"
            />
            <TableItem
              client="Jean Andrews"
              service="Massage and Pedicure"
              staff="Catherine Thornton"
              date="27th June, 2022"
            />
            <TableItem
              client="Jon Tarkowski"
              service="Full body massage"
              staff="Douglas Harper"
              date="27th June, 2022"
            />
            <TableItem
              client="Jude Haddingham"
              service="Bodybuilding"
              staff="Leah Murphy"
              date="27th June, 2022"
            />
            <TableItem
              client="Debra Micheals"
              service="HIT Workout"
              staff="Adrian Little"
              date="27th June, 2022"
            />
            <TableItem
              client="Debra Micheals"
              service="HIT Workout"
              staff="Adrian Little"
              date="27th June, 2022"
            />
          </section>
        </div>
      </section>
    </section>
  );
};

export default Content;
