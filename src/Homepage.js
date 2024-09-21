import React from 'react';

const Home = () => {
  return (
    <div className='px-6'>
      {/* Main content */}
      <main className="bg-gray-100 border border-gray-600 mt-3 rounded-md h-[80vh]">
        {/* <div className='h-14'></div>
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hi Good Morning, Melia!</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Create Task</button>
        </header>
        <div className='divide-y divide-solid divide-slate-800'>
          <div>-----------------------------------</div>
        </div> */}

        <section className="mt-6">
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-2 ml-2 h-full">Tasking</h2>
          <div className="mt-4 mx-2">
            <ul>
              <li className="flex items-center justify-between p-4 bg-gray-50 rounded-md mb-2 shadow-inner hover:shadow-md">
                <input type="checkbox" className="mr-4"/>
                <span>Read a book</span>
              </li>
              <li className="flex items-center justify-between p-4 bg-gray-50 rounded-md mb-2 shadow-inner hover:shadow-md">
                <input type="checkbox" className="mr-4"/>
                <span>Gym</span>
              </li>
              <li className="flex items-center justify-between p-4 bg-gray-50 rounded-md mb-2 shadow-inner hover:shadow-md">
                <input type="checkbox" className="mr-4"/>
                <span>Work hard</span>
              </li>
              <li className="flex items-center justify-between p-4 bg-gray-50 rounded-md mb-2 shadow-inner hover:shadow-md">
                <input type="checkbox" className="mr-4"/>
                <span>Weekly Meeting</span>
              </li>
              <li className="flex items-center justify-between p-4 bg-gray-50 rounded-md mb-2 shadow-inner hover:shadow-md">
                <input type="checkbox" className="mr-4"/>
                <span>Shopping</span>
              </li>
              <li className="flex items-center p-4 bg-gray-50 rounded-md mb-2 shadow-inner hover:shadow-md">
                <div className="flex items-center mr-4">
                  <input type="checkbox" className="mr-2"/>
                  <span>Groceries</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
