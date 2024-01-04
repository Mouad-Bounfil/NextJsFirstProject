// Navbar.tsx

import React from 'react';

interface NavbarProps {
  darkMode?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode = false }) => {
  return (
    <nav className={`bg-white border-gray-200 ${darkMode ? 'dark:bg-gray-900' : ''}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black ">
            IT Maroc
          </span>
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className={`flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 ${
              darkMode ? 'dark:focus:ring-gray-600' : ''
            }`}
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://robohash.org/hicveldicta.png"
              alt="user photo"
            />
          </button>
          {/* Dropdown menu */}
          <div
            className={`z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow ${
              darkMode ? 'dark:bg-gray-700 dark:divide-gray-600' : ''
            }`}
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className={`block text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Bonnie Green
              </span>
              <span
                className={`block text-sm  text-gray-500 truncate ${
                  darkMode ? 'dark:text-gray-400' : ''
                }`}
              >
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${
                    darkMode
                      ? 'text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  }`}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${
                    darkMode
                      ? 'text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  }`}
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${
                    darkMode
                      ? 'text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  }`}
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${
                    darkMode
                      ? 'text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  }`}
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ${
              darkMode ? 'dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' : ''
            }`}
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul
            className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg ${
              darkMode ? 'bg-gray-50' : 'bg-white'
            } md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ${
              darkMode ? 'md:bg-gray-900 dark:bg-gray-800 dark:border-gray-700' : 'md:bg-white'
            }`}
          >
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 ${
                  darkMode ? 'md:bg-transparent md:dark:hover:text-blue-500' : ''
                }`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ${
                  darkMode
                    ? 'dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                    : ''
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ${
                  darkMode
                    ? 'dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                    : ''
                }`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ${
                  darkMode
                    ? 'dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                    : ''
                }`}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ${
                  darkMode
                    ? 'dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                    : ''
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
