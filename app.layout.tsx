import React, { ReactNode, useEffect } from "react";

import Head from "next/head";
import { SideBar } from "../components";
import { useRouter } from "next/router";

interface AppLayoutProps {
  children: ReactNode;
  title?: string;
}

export const AppLayout = ({ children, title }: AppLayoutProps) => {
  const router = useRouter();

  let name;

  let url = router.pathname.split("/");

  console.log(router.pathname);

  if (router) {
    if (url.length > 2) {
      name = url[2].replaceAll("-", " ");
      console.log(url);
    } else {
      name = url[1];
    }
  }

  // useEffect(() => {
  //   if (router) {
  //     if (url.length > 2) {
  //       name = url[2].replaceAll('-', ' ')
  //     } else {
  //       name = url[1]
  //     }
  //   }
  // }, [router])

  return (
    <section className="flex h-screen w-screen overflow-hidden bg-neutral_base pr-2 ">
      <SideBar />
      <section className="w-full h-full overflow-hidden">
        <div className=" pt-5 px-3 pb-3 flex gap-x-6 items-center">
          <h2 className="text-2xl font-semibold text-primary_800 whitespace-nowrap">
            {name}
          </h2>
          <div className="relative w-4/5">
            <input
              className="font-light bg-neutral_900 w-full rounded-md py-1 px-11  outline-none"
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
            <i className="bi bi-search absolute left-4 mt-1 "></i>
          </div>

          <i className="bi bi-bell bg-primary_800 rounded-full w-max text-white  px-2 py-1"></i>
        </div>
        <div className="grid grid-cols-[6fr_2.2fr] gap-x-4">
          {children}
          {/* <aside className="bg-white shadow-300 p-4 rounded-lg h-100 w-full">
            Aside
          </aside> */}
        </div>
      </section>
    </section>
  );
};
