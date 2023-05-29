import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <Link to="/" className="hover:underline">
          Movie Freak™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://www.instagram.com/osman_joher/"
            className="mr-4 hover:underline md:mr-6 "
            target="_blank"
            rel="noreferrer">
            instagram
          </a>
        </li>
        <li>
          <a
            href="https://bd.linkedin.com/in/osmanjoher"
            className="mr-4 hover:underline md:mr-6"
            target="_blank"
            rel="noreferrer">
            linkdin
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@osmanjoher"
            className="mr-4 hover:underline md:mr-6"
            target="_blank"
            rel="noreferrer">
            youtube
          </a>
        </li>
        <li>
          <a
            href="https://github.com/osmanjoher"
            className="hover:underline"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
