import React from "react";

const ListItem = () => {
  return (
    <div className="place-items-center py-2 text-black_800 flex gap-x-24 justify-center items-center text-xs ">
      <div className=" text-xs flex items-center gap-x-3 ">
        <img
          className="w-9 h-9 my-1 rounded-full transition-all duration-500"
          src="https://picsum.photos/200"
          alt="profile pic"
        />

        <div>
          <p className="text-sm font-medium text-black_800">Ben Lockhart</p>
          <p className="text-black_500 text-xs ">Home service</p>
        </div>
      </div>

      <i className="bi bi-check-circle text-xl text-success_900"></i>
    </div>
  );
};

const Recents: React.FC = () => {
  return (
    <section className="shadow-300 h-custom_95 bg-white rounded-lg py-2">
      <aside className="pb-1 pl-6 pr-5">
        <div className="flex items-center justify-between">
          <p className="font-medium text-primary_800 text-base">
            Recent appointments
          </p>
          <span className="block relative">
            <select
              className="form-select appearance-none block w-full
  text-gray-700 bg-neutral_900 text-xs rounded-md py-2 pl-4 pr-8  outline-none transition ease-in-out m-0 "
              aria-label="Default select example"
            >
              <option className="truncate" selected>
                This week
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
      </aside>
      <div className="">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </section>
  );
};

export default Recents;
