import React, { createContext, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import userDefault from '../../assets/images/profile-default.webp';

export const MyContext = createContext();

export const Dashboard = () => {
  const [value, setValue] = useState('');
  let navigate = useNavigate();

  const logout = () => {
    try {
      window.dataStream.logout((data) => {
        if (data) {
          navigate('/');
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="bg-gray-50">
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-3 w-full flex flex-col justify-between h-screen border-r bg-white bg-gray-100 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <Link to="/dashboard" className="flex justify-center" title="home">
              <img src={logo} className="max-h-14" alt="master logo" />
            </Link>
          </div>
          <div className="mt-2 text-center">
            <img src={userDefault} alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-24 lg:h-24" />
            <h5 className="hidden mt-4 text-lg font-semibold text-gray-600 lg:block">Cynthia J. Watts</h5>
            <span className="hidden text-sm text-gray-400 lg:block">Admin</span>
          </div>
          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <Link to="/dashboard" aria-label="dashboard" className={((value === "Dashboard") ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400" : "group") + " relative px-4 py-3 flex items-center space-x-4 rounded-xl"}>
                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600" />
                  <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300" />
                  <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300" />
                </svg>
                <span className="-mr-1 group-hover:font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/create-certificate" className={((value === "Create Certificate") ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400 font-medium" : "group") + " px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600"}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path className="fill-current text-gray-300 group-hover:text-cyan-300" fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                  <path className="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                </svg>
                <span className="-mr-1 group-hover:font-medium">Generate Document</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/create-certificate" className={((value === "Document History") ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400 font-medium" : "group") + " px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600"}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path className="fill-current text-gray-600 group-hover:text-cyan-600" fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                  <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
                <span className="-mr-1 group-hover:font-medium">Document History</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 border-b bg-gray-100 lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">{value}</h5>
            <button className="w-12 h-16 -mr-2 border-r lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex space-x-4">
              <button onClick={logout} aria-label="logout" className="w-10 h-10 rounded-xl border border-gray-400 bg-white focus:bg-gray-50 active:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="min-h-screen">
          <MyContext.Provider value={{ value, setValue }}>
            <Outlet />
          </MyContext.Provider>
        </div>
      </div>
    </div>
  )
}
