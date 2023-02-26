import React from "react";
import { Link } from "react-router-dom";
import PnfLogo from "../assets/images/notfound.png";

export const PageNotFound = () => {
  document.title = "Page Not Found|Movie Freak";
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center py-4">
          <p className="text-7xl font-bold mb-10 dark:text-white">404, Oops!</p>
          <div className="max-w-lg mb-12 ">
            <img src={PnfLogo} alt="404" />
          </div>
          <div>
            <Link to="/">
              <button className=" font-extralight rounded-lg p-3 text-lg text-white bg-gradient-to-r from-slate-500 to-slate-900">
                Back to Movie freak
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
