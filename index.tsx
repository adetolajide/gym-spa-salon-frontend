const CartItem = () => {
  return (
    <aside className="h-max w-11/12 rounded border-secondary_900 border-y border-x border-opacity-60 bg-opacity-20 py-6 px-5 bg-secondary_500">
      <div className="w-full flex justify-center">
        <img
          src="https://source.unsplash.com/user/c_v_r"
          alt=""
          className="w-44 h-36 rounded"
        />
      </div>
      <div className="text-black_800 pt-8">
        <p className="title text-xs font-medium ">
          Novage eCollagen Skincare pack
        </p>
        <p className="price font-semibold">N21,000</p>
      </div>

      <div className="pt-7 text-sm grid grid-cols-[.8fr_1fr]">
        <button className="flex w-max items-center rounded py-1 px-3 text-primary_800 border-x border-y border-primary_800 gap-x-2">
          <i className="bi bi-plus-circle text-lg"></i>
          <p>Add to cart</p>
        </button>
        <button className="flex items-center rounded py-1 px-2 text-primary_800 gap-x-2">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8024 6.30148C16.8375 6.83667 16.7937 7.44205 16.6884 8.11762L16.0479 12.2324C15.5039 15.6629 13.9159 16.821 10.4855 16.2858L6.37064 15.6366C5.18621 15.4523 4.27375 15.1365 3.60696 14.6627C2.33479 13.7766 1.9663 12.3202 2.31724 10.0741L2.96649 5.95931C3.51045 2.52884 5.09847 1.37073 8.52894 1.90592L12.6438 2.55516C15.3987 2.98507 16.6884 4.10809 16.8024 6.30148Z"
              stroke="#054D99"
              strokeWidth="1.31604"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.4416 11.8418L17.1256 15.7987C16.0289 19.0975 14.2741 19.9749 10.9753 18.8782L7.01839 17.5622C5.02679 16.9041 3.92132 15.9917 3.60547 14.6581C4.27226 15.1319 5.18471 15.4477 6.36915 15.632L10.484 16.2812C13.9144 16.8164 15.5025 15.6583 16.0464 12.2278L16.6869 8.11301C16.7922 7.43744 16.836 6.83206 16.8009 6.29688C18.8978 7.41112 19.3541 9.09565 18.4416 11.8418Z"
              stroke="#054D99"
              strokeWidth="1.31604"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.68676 7.90477C8.52988 7.90477 9.21336 7.22129 9.21336 6.37817C9.21336 5.53505 8.52988 4.85156 7.68676 4.85156C6.84364 4.85156 6.16016 5.53505 6.16016 6.37817C6.16016 7.22129 6.84364 7.90477 7.68676 7.90477Z"
              stroke="#054D99"
              strokeWidth="1.31604"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="truncate">Product description</p>
        </button>
      </div>
    </aside>
  );
};

const ProductSalesContent = () => {
  return (
    <section className="w-full py-6 px-8 h-customscreen_90 mx-2 mb-4 bg-white rounded-lg shadow-300">
      <div className="flex justify-between">
        <p className="font-medium">Products (231) </p>
        <div className="relative w-max flex gap-x-2">
          <input
            className="font-light text-xs bg-neutral_900 w-full rounded-md py-2 px-11  outline-none"
            type="search"
            name="search"
            id="search"
            placeholder="Search Products"
          />
          <i className="bi bi-search absolute left-4 mt-1 "></i>
          <button className="flex items-center rounded  py-1 px-4 bg-primary_800 text-white text-xs gap-x-2">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3186 19.0678C14.3186 19.6778 13.9186 20.4778 13.4086 20.7878L11.9986 21.6978C10.6886 22.5078 8.86859 21.5978 8.86859 19.9778V14.6278C8.86859 13.9178 8.46859 13.0078 8.05859 12.5078L4.21857 8.4678C3.70857 7.9578 3.30859 7.05781 3.30859 6.44781V4.12781C3.30859 2.91781 4.21861 2.00781 5.32861 2.00781H18.6686C19.7786 2.00781 20.6886 2.9178 20.6886 4.0278V6.2478C20.6886 7.0578 20.1786 8.06781 19.6786 8.56781"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.0711 16.5172C17.8384 16.5172 19.2711 15.0845 19.2711 13.3172C19.2711 11.5499 17.8384 10.1172 16.0711 10.1172C14.3038 10.1172 12.8711 11.5499 12.8711 13.3172C12.8711 15.0845 14.3038 16.5172 16.0711 16.5172Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.8711 17.1172L18.8711 16.1172"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Filter</p>
          </button>
        </div>
      </div>
      <section className="mt-4 mb-4 pb-4 grid grid-cols-2 gap-y-6 h-custom_95 overflow-y-scroll">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </section>
    </section>
  );
};

export default ProductSalesContent;
