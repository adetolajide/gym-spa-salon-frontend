import React from "react";
const ServiceItem = () => {
  return (
    <div className="border-black_500 text-black_800 border-b grid grid-cols-4 items-center text-xs ">
      <div className="my-2 py-1 text-xs flex items-center gap-x-3 ">
        <img
          className="w-11 h-11 my-1 rounded-full transition-all duration-500"
          src="https://picsum.photos/200"
          alt="profile pic"
        />

        <div>
          <p className="font-medium text-black_800">Ben Lockhart</p>
          <p className="text-black_500 text-xs pt-1">Home service</p>
        </div>
      </div>
      <p className="text-center">Massage and Pedicure</p>
      <p className="text-center">
        27th June, 2022,
        <br /> 03:00PM
      </p>
      <p className="text-center">Walk-in</p>
    </div>
  );
};

const AppointmentsContent: React.FC = () => {
  return (
    <section className="w-full py-8 pl-16 px-8 h-customscreen_90 overflow-hidden mx-2 mb-4 bg-white rounded-lg shadow-300">
      <div className="flex justify-between">
        <p className="font-medium">Available appointments</p>
        <div className="relative w-max flex gap-x-2">
          <button className="flex items-center rounded  py-1 px-4 bg-primary_800 text-white text-xs gap-x-2">
            <i className="bi bi-plus-circle text-base"></i>
            <p>Create New Appointment</p>
          </button>
        </div>
      </div>
      <p className="flex items-center gap-x-2 text-xs text-black_700">
        Click on appointment to edit
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
            stroke="#515863"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.0418 3.02123L8.16183 10.9012C7.86183 11.2012 7.56183 11.7912 7.50183 12.2212L7.07183 15.2312C6.91183 16.3212 7.68183 17.0812 8.77183 16.9312L11.7818 16.5012C12.2018 16.4412 12.7918 16.1412 13.1018 15.8412L20.9818 7.96123C22.3418 6.60123 22.9818 5.02123 20.9818 3.02123C18.9818 1.02123 17.4018 1.66123 16.0418 3.02123Z"
            stroke="#515863"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.9102 4.14844C15.5802 6.53844 17.4502 8.40844 19.8502 9.08844"
            stroke="#515863"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </p>

      <div className="border-black_500 text-black_500 border-b grid grid-cols-4 text-xs py-4 mr-11">
        {/* <div className="my-2 py-1 text-xs flex items-center gap-x-3 "> */}
        <p className=" text-xs pt-1">Client name</p>

        <p className="text-center">Service</p>
        <p className="text-center">Date and time</p>
        <p className="text-center">Location</p>
        {/* </div> */}
      </div>
      <section className="mt-1 pr-10 pb-9 h-custom_95 overflow-y-scroll">
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
      </section>
    </section>
  );
};

export default AppointmentsContent;
