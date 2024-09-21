import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import DateCalendarValue from './calender';

const Layout = ({ children }) => {
  const location = useLocation(); // Get the current route path

  // State to control the popup visibility
  const [showPopup, setShowPopup] = useState(false);
  // const popupRef = useRef(null);
  const [showCalenderPopup, setShowCalenderPopup] = useState(false);

  // Function to toggle popup visibility
  const togglePopup = () => {
      setShowPopup(!showPopup);
      setShowCalenderPopup(false); // Close calendar if popup is closed
  };
  const calenderPopup = () => {
    setShowCalenderPopup(!showCalenderPopup);
  }

  const [userName, setUserName] = useState(''); // State to hold the user's name
  const navigate = useNavigate();  // Initialize navigate

  useEffect(() => {
    // Retrieve the user information from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    // If no user is found, redirect to the login page
    if (!user) {
      navigate('/login');  // Redirect to login if the user is not logged in
    } else if (user && user.name) {
      setUserName(user.name);  // Set the user's name
    } else {
      setUserName('Guest');  // Fallback to "Guest" if no name is available
    }
  }, [navigate]);  // Dependency array includes navigate to avoid issues with stale closures

  // Handle clicks outside the popup
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//         if (popupRef.current && !popupRef.current.contains(event.target)) {
//             setShowPopup(false);
//         }
//     };

//     if (showPopup) {
//         document.addEventListener('mousedown', handleClickOutside);
//     } else {
//         document.removeEventListener('mousedown', handleClickOutside);
//     }

//     // Cleanup the event listener on component unmount or when showPopup changes
//     return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//     };
// }, [showPopup]);

  return (
    <div className="flex">
      {/* Main content */}

      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 h-screen p-4">
        <div className="flex items-center space-x-4">
            <img src="/images/icon.png" alt="Home" className="w-6 h-6"/>
            <h3 className='font-bold'>To Do List</h3>
        </div>
        <div className="flex items-center space-x-4 my-4">
          <img src="/images/profile.png" alt="User" className="w-12 h-12 rounded-full"/>
          <div>
            <p className="font-bold">{userName}</p>
            <p className="text-sm text-gray-500">Basic Plan</p>
          </div>
        </div>
        <nav>
          <ul>
            <li className="flex items-center p-2 text-gray-700">
              <img src="/images/home.png" alt="Home" className="w-6 h-6"/>
              <Link
                to="/"
                className={`ml-4 ${
                  location.pathname === '/home' ? 'text-blue-500' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
            </li>
            <li className="flex items-center p-2 text-gray-700">
              <img src="/images/checklist.png" alt="completed" className="w-6 h-6"/>
              <Link
                to="/completed"
                className={`ml-4 ${
                  location.pathname === '/completed'
                    ? 'text-blue-500'
                    : 'text-gray-700'
                }`}
              >
                Completed
              </Link>
            </li>
            <li className="flex items-center p-2 text-gray-700">
              <img src="/images/uncompleted.png" alt="uncompleted" className="w-6 h-6"/>
              <Link
                to="/uncompleted"
                className={`ml-4 ${
                  location.pathname === '/uncompleted'
                    ? 'text-blue-500'
                    : 'text-gray-700'
                }`}
              >
                Uncompleted
              </Link>
            </li>
            <li className="flex items-center p-2 text-gray-700">
              <img src="/images/notes.png" alt="notes" className="w-6 h-6"/>
              <Link
                to="/notes"
                className={`ml-4 ${
                  location.pathname === '/notes'
                    ? 'text-blue-500'
                    : 'text-gray-700'
                }`}
              >
                Notes
              </Link>
            </li>
            <li className="flex items-center p-2 text-gray-700">
              <img src="/images/courses.png" alt="courses" className="w-6 h-6"/>
              <Link
                to="/courses"
                className={`ml-4 ${
                  location.pathname === '/courses'
                    ? 'text-blue-500'
                    : 'text-gray-700'
                }`}
              >
                Courses
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-6 text-sm border-t border-gray-300">
          <p className="font-semibold mt-1">Support</p>
        </div>
      </aside>

      {/* Page Content */}
      <main className="flex-1 pb-6 bg-gray-100">
        <div className='relative flex items-center h-14 bg-white mb-4 mt-0'>
            <div className='flex items-center'>
                <img src='/images/left.png' alt='left' className='w-6 h-6 bg-gray-100 ml-2'/>
                <img src='/images/right.png' alt='right' className='w-6 h-6 bg-gray-100'/>
                <div className='flex items-center border border-gray-300 rounded-md bg-gray-100 ml-4'>
                    <img src='/images/search.png' alt='search' className='w-6 h-6'/>
                    <input type='text' placeholder='Type to search...' className='w-36 text-xs px-4 py-2 border-none flex-1'/>
                </div>
            </div>
            <button 
                onClick={() => {
                    localStorage.removeItem('user');  // Clear user session
                    navigate('/login');  // Redirect to login page
                }} 
                className="absolute right-4 text-red-500"
            >
                Logout
            </button>
        </div>


        {/* Header */}
        <header className="flex justify-between items-center mx-6 mt-2 border-b border-gray-300 pb-2">
            <h1 className="text-2xl">Hi Good Morning, <strong>{userName}</strong>!</h1>
            <div className='flex bg-blue-500 px-4 py-2 rounded-2xl' onClick={togglePopup}>
                <img src="/images/plus.png" alt="Home" className="w-6 h-6"/>
                <button className="text-white ml-2">Create Task</button>
            </div>
        </header>
        {/* Conditionally render the popup */}
        {showPopup && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg w-1/3 h-3/5">
                {/* Your form or popup content goes here */}
                    <div className='flex justify-between items-center bg-gray-200 rounded-md'>
                        <div className='p-1 flex'>
                            <input type="checkbox" className="ml-2"/>
                            <span className="text-sm ml-2 text-gray-500">Create a new task</span>
                        </div>
                            <div className='bg-gray-100 rounded-md mr-2 px-1'>
                                <span className='text-xs text-gray-400'>12 Sept</span>
                            </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='py-1 flex mt-2 border border-gray-200 rounded-md w-11/12'>
                            <input type="checkbox" className="ml-3"/>
                            <span className="text-sm ml-2 text-gray-500">Category List</span>
                        </div>
                        <img
                            src="/images/calender.png"
                            alt="Calendar Icon"
                            className="h-10 cursor-pointer"
                            onClick={calenderPopup}
                        />
                    </div>

                    {showCalenderPopup && (
                        <div className='flex justify-center mt-4'>
                          <DateCalendarValue />
                        </div>
                    )}
                </div>
                <div className="absolute bottom-48 ml-24">
                    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={togglePopup}>Cancel</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded ml-4" onClick={togglePopup}>Save Changes</button>
                </div>
            </div>
        )}

        <Outlet />
        {children}
      </main>
      {/* <main className="flex-1 p-6 bg-white">{children}</main> */}
    </div>
  );
};

export default Layout;
