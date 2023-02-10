import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications';

import logo from '../../assets/images/logo.png';

export const Login = () => {
  let navigate = useNavigate();
  const [screen, setScreen] = useState(1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState(null);

  /*useEffect(() => {
    console.log('useEffect');
    // try {
    //   window.dataStream.getIfLoggedIn((loginStatus) => {
    //     if (loginStatus) {
    //       navigate('/dashboard');
    //     }
    //   });
    // } catch (e) {
    //   console.log(e);
    // }
  }, []);*/

  function checkLogin(e) {
    e.preventDefault();
    let errorFlag = false;
    if (username === '') {
      NotificationManager.warning("Please enter your username", "Couldn't Login");
      errorFlag = true;
    }
    if (password === '') {
      NotificationManager.warning("Please enter your password", "Couldn't Login");
      errorFlag = true;
    }

    if (errorFlag === false) {
      setLoading(true);

      try {
        window.dataStream.loginCloud(username, password, (response) => {
          console.log(response);
          if (response) {
            navigate('/dashboard');
            /*setLoginData(response);
            setScreen(2);*/
            /*navigate('/dashboard',
              {
                state: {
                  name: response.name,
                  master_code: response.master_id,
                  last_login: response.last_login
                }
              }
            );*/

          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a target="_blank" rel="noreferrer" href="https://www.mastersystems.org/" className="flex items-center mb-6">
          <img className="h-16 mr-2" src={logo} alt="logo" />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {(screen === 1) ?
              <>
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" onChange={e => setUsername(e.target.value)} required />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setPassword(e.target.value)} required />
                  </div>

                  <button onClick={checkLogin} disabled={loading ? 'disabled' : ''} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                </form>
              </> :
              <div className="flex flex-col">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Welcome {loginData.name}
                </h1>

                <Link to="/dashboard" className="w-full mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <span>Goto Dashboard</span>
                </Link>

              </div>

            }
            <NotificationContainer />
          </div>
        </div>
      </div>
    </section>
  )
}
