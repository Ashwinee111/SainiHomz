import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaSquareFacebook,
  FaYoutube,
  FaSquareTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-white font-primary">
      <div className="mx-auto max-w-[1500px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            {/* News Subscription */}
            <div className="col-span-2">
              <h2 className="text-3xl font-bold text-gray-900">
                Get the latest news!
              </h2>
              <p className="mt-4 text-gray-500 text-xl">
                Get the latest real estate news, market trends, and property
                insights delivered to your inbox.
              </p>
            </div>

            {/* Subscription Form */}
            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  Email
                </label>
                <div className="p-2 sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="w-full border outline-none sm:text-sm px-6 py-3"
                  />
                  <button className="mt-1 w-full bg-primary text-sm font-bold px-6 py-3 uppercase tracking-wide text-white transition hover:bg-[#53b54c] sm:mt-0 sm:w-auto sm:shrink-0">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>

            {/* Company Links */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 text-xl">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-700 transition hover:opacity-75"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-700 transition hover:opacity-75"
                  >
                    Meet the Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-700 transition hover:opacity-75"
                  >
                    Accounts Review
                  </a>
                </li>
              </ul>
            </div>

            {/* Helpful Links */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 text-xl">Helpful Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-700 transition hover:opacity-75"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-700 transition hover:opacity-75"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-700 transition hover:opacity-75"
                  >
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 text-xl">
                Contact Information
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-700 transition hover:opacity-75"
                  >
                    #636, Esplanade Mall, Rasulgarh, Bhubaneswar, Odisha -
                    751010
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-700 transition hover:opacity-75"
                  >
                    sainihomz@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-700 transition hover:opacity-75"
                  >
                    +91 9124570573
                  </a>
                </li>
              </ul>
            </div>

            {/* Working hours */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 text-xl">
                Working Hours
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-700 transition hover:opacity-75"
                  >
                    Thursday - Tuesday : 10Am - 6PM
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-700 transition hover:opacity-75"
                  >
                    Wednesday : Closed
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Connect with Us */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 text-xl">
                Connect With Us
              </p>
              <ul className="mt-6 flex justify-start gap-6">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-lg text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaSquareFacebook size={25} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-lg text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>
                    <FaInstagram size={25} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-lg text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>
                    <FaSquareTwitter size={25} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-lg text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin size={25} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-lg text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">YouTube</span>
                    <FaYoutube size={25} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-lg text-gray-500">
              &copy; 2023 Saini Properties. All rights reserved.
            </p>
            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-500 transition hover:opacity-75"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-500 transition hover:opacity-75"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-500 transition hover:opacity-75"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
