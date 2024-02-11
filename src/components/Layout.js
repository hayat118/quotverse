import React from "react";
import {
  Bars3BottomRightIcon,
  HeartIcon,
  HomeIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";

import {
  HeartIcon as HeartIconActive,
  HomeIcon as HomeIconActive,
} from "@heroicons/react/24/solid";

import CustomNavLink from "./CustomNavLink";

import { Outlet, Link } from "react-router-dom";

import TagSection from "./TagSection";

function Layout() {
  return (
    <div className="App">
      <nav>
        <header className="grid grid-cols-12 border-b border-gray-600">
          <div className="col-span-3 p-4">
            <div className="text-center">
              <Link to="/">
                <h1 className="text-xl font-semibold">Quotverse</h1>
              </Link>
            </div>
          </div>

          <div className="col-span-6 border-x border-gray-600">
            <div className="flex place-content-around p-4">
              <p>
                <CustomNavLink
                  to="/"
                  activeIcon={<HomeIconActive className="h-6 w-6" />}
                  inActiveIcon={<HomeIcon className="h-6 w-6" />}
                />
              </p>
              <p>
                <CustomNavLink
                  to="/liked"
                  activeIcon={<HeartIconActive className="h-6 w-6" />}
                  inActiveIcon={<HeartIcon className="h-6 w-6" />}
                />
              </p>
            </div>
          </div>

          <div className="col-span-3 flex justify-end p-4">
            <Bars3BottomRightIcon className="h-6 w-6 " />
          </div>
        </header>
      </nav>

      <div className="grid grid-cols-12">
        <div className="col-span-3 p-10">
          <img src="/avatar.png" className="h-12 w-12 rounded-full" />
          <p className="col-span-3 mt-4">John Doe</p>
          <p className="text-sm mt-1">johndoe</p>
          <p className="mt-4">UI Developer | Let's redesign the world</p>
          <p className="mt-4 text-gray-600">2957 likes </p>
        </div>

        <div className="col-span-6 border-x border-gray-600">
          <Outlet />
        </div>

        <div className="col-span-3">
          <div className="p-10">
            <div className="flex place-content-between">
              <h2 className="font-semibold text-xl">Trending Topics</h2>
              <Cog8ToothIcon className="h-6 w-6 text-gray-600" />
            </div>

            <Link to="/" className="text-blue-400 mt-6 block">
              show all quotes
            </Link>

            <TagSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
