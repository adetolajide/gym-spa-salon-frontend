const Customer = () => {
  return (
    <div className="my-2 py-1 text-xs flex items-center gap-x-3 ">
      <img
        className="w-9 h-9 my-1 rounded-full transition-all duration-500"
        src="https://picsum.photos/200"
        alt="profile pic"
      />

      <div>
        <p className="font-medium text-black_800">Ben Lockhart</p>
        <p className="text-black_700 text-xs">Free delivery on every order</p>
      </div>
    </div>
  );
};

const Customers = () => {
  return (
    <section className="shadow-300 bg-white rounded-lg py-2 px-5 ">
      <span className=" flex items-center justify-between font-semibold text-primary_800">
        <p className="flex gap-x-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97C3 3.33 4.34 2 6 2H18C19.66 2 21 3.33 21 4.97V15.88C21 17.52 19.66 18.86 18 18.86Z"
              stroke="#054D99"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.073 8.94687C12.033 8.94687 11.973 8.94687 11.923 8.94687C10.873 8.90687 10.043 8.05687 10.043 6.99687C10.043 5.91687 10.913 5.04688 11.993 5.04688C13.073 5.04688 13.943 5.92687 13.943 6.99687C13.953 8.05687 13.123 8.91687 12.073 8.94687Z"
              stroke="#054D99"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.25141 11.9531C7.92141 12.8431 7.92141 14.2931 9.25141 15.1831C10.7614 16.1931 13.2414 16.1931 14.7514 15.1831C16.0814 14.2931 16.0814 12.8431 14.7514 11.9531C13.2414 10.9531 10.7714 10.9531 9.25141 11.9531Z"
              stroke="#054D99"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Select customer
        </p>
        <i
          className="bi bi-plus-lg bg-primary_800  px-2 py-1 text-base rounded-full w-max
           text-white"
        ></i>
      </span>
      <div className="relative w-full flex mt-2">
        <input
          className="font-light text-xs bg-neutral_900 w-full rounded-md py-2 px-8  outline-none"
          type="search"
          name="search"
          id="search"
          placeholder="Search customers"
        />
        <i className="bi bi-search absolute left-2 mt-1 "></i>
      </div>
      <div className="h-16 mt-2 overflow-y-scroll">
        <Customer />
        <Customer />
      </div>
    </section>
  );
};

export default Customers;
