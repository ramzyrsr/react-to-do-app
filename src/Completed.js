import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Completed = () => {
    const [activeIndex, setActiveIndex] = useState(null); // State to track the active item
    
    const handleItemClick = (index) => {
        setActiveIndex(index); // Update the active item index
    };

    const items = ['Lari', 'Makan', 'Belajar'];

  return (
    <div className="p-6 flex flex-row h-[80vh]">
        <div className='border border-gray-600 basis-1/3 rounded-xl'>
            <div className='border-b border-blue-400 p-4'>
                <span>Overview</span>
            </div>
            <ul className='mt-3'>
            {['task', 'notes'].map((item, index) => (
                <li
                    key={index}
                    className={`flex px-4 py-1 cursor-pointer ${activeIndex === index ? 'bg-blue-300 text-white' : 'hover:bg-blue-200'}`}
                    onClick={() => handleItemClick(index)} // Set the active item on click
                >
                    
                    <img src={`/images/${item.toLowerCase()}.png`} alt={item.toLowerCase()} className="w-6 h-6" />
                    <Link className='ml-2'>{item}</Link>
                </li>
            ))}
        </ul>
        </div>
        <div className='border border-gray-600 basis-2/3 ml-8 rounded-xl'>
            <div className='border-b border-blue-400 p-4'>
                <span>Personal</span>
            </div>
            <ul className='mt-3'>
                {items.map((item, index) => (
                    <li 
                        key={index} 
                        className={`px-4 py-1 ${index % 2 === 0 ? 'bg-blue-200' : 'bg-gray-100'}`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default Completed;
