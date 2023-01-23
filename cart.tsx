const CartItem = () => {
  return (
    <div className=" flex items-center gap-x-3 w-full">
      <img
        className="w-12 h-12 my-1 rounded transition-all duration-500"
        src="https://picsum.photos/200"
        alt="profile pic"
      />

      <div className="truncate">
        <p className="font-medium text-sm text-black_800 truncate">
          Novage eCollagen Skincare pack
        </p>
        <p className="text-black_600 text-xs truncate">
          Novage eCollagen Skincare pack
        </p>
        <p className="price font-semibold text-sm">N21,000</p>
      </div>
      <div className="bg-secondary_500 bg-opacity-20 ">
        <button className="bg-primary_900 rounded-t-md text-white px-1">
          <i className="bi bi-plus"></i>
        </button>
        <p className="text-center">1</p>
        <button className="bg-primary_900 rounded-b-md text-white px-1">
          <i className="bi bi-dash"></i>
        </button>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <section className="shadow-300 bg-white overflow-y-scroll h-full rounded-lg py-4 mb-4 px-5 ">
      <div className="flex gap-x-2 justify-between items-center">
        <p className="flex gap-x-2 font-medium text-primary_800">
          <i className="bi bi-cart"></i>
          Cart
        </p>
        <p className="text-xs font-medium text-secondary_900 text-opacity-60 truncate">
          Transaction ID: #331002-P
        </p>
      </div>
      <div className="grid grid-cols-[1fr_auto] place-items-center font-light text-xs my-2 gap-x-2">
        <span className="block relative w-full">
          <select
            className="form-select appearance-none block w-full text-gray-700 bg-neutral_900  rounded-md py-2 px-6  outline-none transition ease-in-out m-0 "
            aria-label="Default select example"
          >
            <option className="truncate" selected>
              Input customer ID
            </option>
          </select>
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            className="absolute left-1 top-2 "
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.1068 13.8125H10.2734"
              stroke="#818B99"
              strokeWidth="1.0625"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.6914 15.2318V12.3984"
              stroke="#818B99"
              strokeWidth="1.0625"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.61773 7.69698C8.5469 7.6899 8.4619 7.6899 8.38398 7.69698C6.69815 7.64031 5.3594 6.25906 5.3594 4.55906C5.35232 2.82365 6.7619 1.41406 8.49732 1.41406C10.2327 1.41406 11.6423 2.82365 11.6423 4.55906C11.6423 6.25906 10.2965 7.64031 8.61773 7.69698Z"
              stroke="#818B99"
              strokeWidth="1.0625"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.49453 15.4489C7.20536 15.4489 5.92328 15.123 4.94578 14.4714C3.23161 13.3239 3.23161 11.4539 4.94578 10.3134C6.8937 9.0101 10.0883 9.0101 12.0362 10.3134"
              stroke="#818B99"
              strokeWidth="1.0625"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className="absolute right-1 top-2"
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
        <button className="flex items-center rounded w-max  py-1 px-2 bg-primary_800 text-white gap-x-2">
          <i className="bi bi-plus-circle text-base"></i> <p>Add new</p>
        </button>
      </div>
      <CartItem />
      <p className="cursor-pointer font-light text-error_700 ml-14 text-xs">
        Remove item
      </p>
      <div className="text-xs px-2 py-2 border-black_500 border-b">
        <span className="flex items-center justify-between">
          <p className="text-black_600">Tax</p>
          <p className="text-black_800">N200</p>
        </span>
        <span className="flex py-1 items-center justify-between">
          <p className="text-black_600">Delivery Fee</p>
          <p className="text-black_800">N500</p>
        </span>
        <span className="flex items-center justify-between">
          <p className="text-black_600">Subtotal</p>
          <p className="text-black_800">N21,700</p>
        </span>
      </div>
      <button className="flex justify-center items-center gap-x-2 font-medium text-xs w-full rounded py-1 my-2 text-black_600 border-black_600 border-x border-y">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3048 7.9234V13.0734C19.3048 16.1534 17.5448 17.4734 14.9048 17.4734H6.11484C5.66484 17.4734 5.23484 17.4334 4.83484 17.3434C4.58484 17.3034 4.34485 17.2334 4.12485 17.1534C2.62485 16.5934 1.71484 15.2934 1.71484 13.0734V7.9234C1.71484 4.8434 3.47484 3.52344 6.11484 3.52344H14.9048C17.1448 3.52344 18.7548 4.47343 19.1848 6.64343C19.2548 7.04343 19.3048 7.4534 19.3048 7.9234Z"
            stroke="#818B99"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.3059 10.9206V16.0706C22.3059 19.1506 20.5459 20.4706 17.9059 20.4706H9.11594C8.37594 20.4706 7.70595 20.3706 7.12595 20.1506C5.93595 19.7106 5.12594 18.8006 4.83594 17.3406C5.23594 17.4306 5.66594 17.4706 6.11594 17.4706H14.9059C17.5459 17.4706 19.3059 16.1506 19.3059 13.0706V7.92059C19.3059 7.45059 19.2659 7.03062 19.1859 6.64062C21.0859 7.04063 22.3059 8.38059 22.3059 10.9206Z"
            stroke="#818B99"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5033 13.1394C11.9613 13.1394 13.1433 11.9574 13.1433 10.4994C13.1433 9.04136 11.9613 7.85938 10.5033 7.85938C9.04526 7.85938 7.86328 9.04136 7.86328 10.4994C7.86328 11.9574 9.04526 13.1394 10.5033 13.1394Z"
            stroke="#818B99"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.78516 8.30469V12.7047"
            stroke="#818B99"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.2266 8.30469V12.7047"
            stroke="#818B99"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Cash payment
      </button>
      <button className="flex justify-center items-center gap-x-2 font-medium text-xs text-center w-full rounded py-1 my-1 text-primary_700 border-primary_900 border-x border-y">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.50391 12.6094H19.5039"
            stroke="#0555A8"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5039 10.2769V17.4269C19.4739 20.2769 18.6939 20.9969 15.7239 20.9969H6.28394C3.26394 20.9969 2.50391 20.2469 2.50391 17.2669V10.2769C2.50391 7.57687 3.13391 6.70688 5.50391 6.56688C5.74391 6.55688 6.00394 6.54688 6.28394 6.54688H15.7239C18.7439 6.54688 19.5039 7.29687 19.5039 10.2769Z"
            stroke="#0555A8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.5039 6.73V13.72C22.5039 16.42 21.8739 17.29 19.5039 17.43V10.28C19.5039 7.3 18.7439 6.55 15.7239 6.55H6.28394C6.00394 6.55 5.74391 6.56 5.50391 6.57C5.53391 3.72 6.31394 3 9.28394 3H18.7239C21.7439 3 22.5039 3.75 22.5039 6.73Z"
            stroke="#0555A8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.75391 17.8125H7.47388"
            stroke="#0555A8"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.61328 17.8125H13.0533"
            stroke="#0555A8"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Credit/Debit card
      </button>
      <p className="flex my-2 items-center gap-x-2 text-black_600 text-xs font-medium">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.25 7H16.75V5C16.75 3 16 2 13.75 2H10.25C8 2 7.25 3 7.25 5V7Z"
            stroke="#818B99"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 15V19C16 21 15 22 13 22H11C9 22 8 21 8 19V15H16Z"
            stroke="#818B99"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 10V15C21 17 20 18 18 18H16V15H8V18H6C4 18 3 17 3 15V10C3 8 4 7 6 7H18C20 7 21 8 21 10Z"
            stroke="#818B99"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 15H15.79H7"
            stroke="#818B99"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 11H10"
            stroke="#818B99"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Print receipt
      </p>
      <button className="flex justify-center items-center gap-x-2 font-medium text-xs text-center w-full rounded py-1 my-1 text-white bg-primary_900 border-x border-y">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 8.5H15"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 16.5H8.5"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 16.5H15"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.5 14.03V16.11C22.5 19.62 21.61 20.5 18.06 20.5H6.94C3.39 20.5 2.5 19.62 2.5 16.11V7.89C2.5 4.38 3.39 3.5 6.94 3.5H15"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5 9.5V3.5L22.5 5.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5 3.5L18.5 5.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Charge customer
      </button>
    </section>
  );
};

export default Cart;
