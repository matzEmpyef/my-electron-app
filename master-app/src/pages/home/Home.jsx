import React, { useContext, useEffect } from 'react'
// import { useLocation } from 'react-router-dom';
import { MyContext } from '../dashboard/Dashboard';

import formImg from '../../assets/images/form.svg';
import uploadImg from '../../assets/images/upload-to-cloud.svg';
import lastImg from '../../assets/images/data-synchronization.svg';

export const Home = () => {
  const { setValue } = useContext(MyContext);
  //const { state } = useLocation();

  useEffect(() => {
    console.log('Dashboard:useEffect');
    setValue('Dashboard');

  }, []);

  return (
    <>
      <div className="px-6 pt-6 2xl:container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
              <img src={formImg} className="max-h-20 mx-auto" alt="logo" />
              <div className="text-center">
                <h5 className="text-xl text-gray-600 text-center">Total Forms Available</h5>
                <h1 className="text-5xl font-bold text-gray-800">64</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:h-full py-6 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
              <img src={lastImg} className="max-h-20 mx-auto" alt="logo" />
              <div className="text-center">
                <h5 className="text-xl text-gray-600 text-center">Last Sync Date</h5>
                <h3 className="text-xl pt-4 font-bold text-gray-800">07/02/2023 12:21 PM</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:h-full py-6 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
              <img src={uploadImg} className="max-h-20 mx-auto" alt="logo" />
              <div className="text-center">
                <h5 className="text-xl text-gray-600 text-center">Pending Upload(s)</h5>
                <h1 className="text-5xl font-bold text-gray-800">4</h1>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
