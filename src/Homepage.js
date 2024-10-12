import React, { useEffect, useState } from 'react';
// import { getTodoList } from './helper';

const Home = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      
      if (user) {
        try {
          // const response = await getTodoList(user.userId);
          // const list = await response.json();
          // console.log(list);

          // Example data - you may want to replace this with actual data
          const exampleData = [
            {
              "_id": "66f9952a1c84c2bdfac7c67c",
              "title": "Bangun Sholat",
              "isCompleted": true
            },
            {
              "_id": "66f994d21c84c2bdfac7c677",
              "title": "Bikin Vlog",
              "isCompleted": false
            }
          ];

          // Set the data list
          setDataList(exampleData);
        } catch (error) {
          console.error('Error fetching todo list:', error);
        }
      }
    };

    getData();
  }, []);

  return (
    <div className='px-6'>
      {/* Main content */}
      <main className="bg-gray-100 border border-gray-600 mt-3 rounded-md h-[80vh]">

        <section className="mt-6">
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-2 ml-2 h-full">Tasking</h2>
          <div className="mt-4 mx-2">
            <ul>
              {dataList.map((item) => (
                <li key={item._id} className="flex items-center p-4 bg-gray-50 rounded-md mb-2 shadow-inner hover:shadow-md">
                  <div className="flex items-center mr-4">
                    <input type="checkbox" className="mr-2" defaultChecked={item.isCompleted} />
                    <span>{item.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
