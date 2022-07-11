import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid';

const elements = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 1, 0, 34, 45];

const Country = () => {
  return (
    <div className="flex flex-col w-60 h-80 bg-very-dark-blue">
      <div className="flex-1">
        <img
          className="w-full h-auto object-cover"
          alt="Flag of Germany"
          src="https://img.freepik.com/premium-photo/flag-germany-3d-illustration-german-flag-waving_2227-1776.jpg?w=2000"
        />
      </div>
      <div className="flex-1 px-3 py-2">
        <h1 className="text-white font-bold text-lg my-2">Germany</h1>
        <p className="text-white">
          Population : <span className="text-dark-gray">81,711,000</span>
        </p>
        <p className="text-white">
          Region: <span className="text-dark-gray">Europe</span>
        </p>
        <p className="text-white">
          Capital: <span className="text-dark-gray">Berlin</span>
        </p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <header className="bg-very-dark-blue p-4">
        <div className="max-w-7xl w-full mx-auto">
          <h1 className="text-white font-bold text-xl">Where in the world ?</h1>
        </div>
      </header>
      <main className="mx-auto max-w-7xl w-full my-4">
        <section className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-row items-center space-x-1">
            <SearchIcon className="text-white w-7 h-7" />
            <input
              className="w-full p-1 text-white bg-very-dark-blue border-none"
              type="text"
              placeholder="Search for a country"
            />
          </div>
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-very-dark-blue  px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Filter by region
                  <ChevronDownIcon
                    className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 bg-very-dark-blue focus:outline-none">
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? ' text-white' : 'text-very-light-gray'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Africa
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? ' text-white' : 'text-very-light-gray'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          America
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? ' text-white' : 'text-very-light-gray'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Asia
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? ' text-white' : 'text-very-light-gray'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Europe
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? ' text-white' : 'text-very-light-gray'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Oceania
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </section>
        <section className="grid grid-rows-4 md:grid-flow-col gap-4 my-4">
          {elements.map((element) => (
            <Country />
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
