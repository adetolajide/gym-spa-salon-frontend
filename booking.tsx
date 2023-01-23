import React from "react";

const Booking: React.FC = () => {
  return (
    <section className="shadow-300 h-min bg-white rounded-lg">
      <aside className="pb-1 pl-6 pr-5">
        <span className="flex px-4 py-5 items-center border-black_500 border-b font-semibold text-primary_800 gap-x-2">
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.44531 2V5"
              stroke="#054D99"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.8906 2V5"
              stroke="#054D99"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.69531 9.09375H21.643"
              stroke="#054D99"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.1715 8.5V17C22.1715 20 20.5878 22 16.8927 22H8.44671C4.75159 22 3.16797 20 3.16797 17V8.5C3.16797 5.5 4.75159 3.5 8.44671 3.5H16.8927C20.5878 3.5 22.1715 5.5 22.1715 8.5Z"
              stroke="#054D99"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6627 13.7031H12.6722"
              stroke="#054D99"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.75645 13.7031H8.76593"
              stroke="#054D99"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.75645 16.7031H8.76593"
              stroke="#054D99"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p> Booking details</p>
        </span>
        <p className="text-xs text-black_600 py-2">Packages added</p>

        <div className="relative px-2 py-2 text-black_800">
          <span className="flex py-1 items-center justify-between">
            <p className="">Full body massage.</p>
            <p className="text-black_500 text-xs">N6,000</p>
          </span>
          <span className="flex items-center justify-between">
            <p className="">Pedicure</p>
            <p className="text-black_500 text-xs">N1,700</p>
          </span>
        </div>
        <div className="text-xs px-2 py-2 text-black_800">
          <span className="flex py-1 items-center justify-between">
            <p className="">Misc.</p>
            <p className="text-black_500">N400</p>
          </span>
          <span className="flex items-center justify-between">
            <p className="">Cleaning charge</p>
            <p className="text-black_500">N200</p>
          </span>
        </div>
      </aside>
      <div className="py-3  rounded-b-lg flex items-center gap-x-8 justify-center bg-neutral_800">
        <p className="">Total amount paid</p>
        <p className="text-xl">N8,300</p>
      </div>
    </section>
  );
};

export default Booking;
