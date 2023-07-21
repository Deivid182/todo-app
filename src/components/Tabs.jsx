/* eslint-disable react/prop-types */
import { useState } from 'react';
import TaskItem from './TaskItem';

const Tabs = ({ allTasks, completedTasks, activeTasks }) => {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  console.log(allTasks)

  return (
    <div>
      <ul className="flex items-center shadow-sm bg-gray-50 w-5/6 mx-auto mt-6 justify-between p-2 rounded-full">
        <li className={activeTab === 1 ? 'text-sky-600 cursor-pointer text-lg font-semibold ' : ''} onClick={() => handleTabClick(1)}>All</li>
        <li className={activeTab === 2 ? 'text-sky-600 cursor-pointer text-lg font-semibold' : ''} onClick={() => handleTabClick(2)}>Completed</li>
        <li className={activeTab === 3 ? 'text-sky-600 cursor-pointer text-lg font-semibold' : ''} onClick={() => handleTabClick(3)}>Active</li>
      </ul>

      <div className="p-4 bg-white mt-4 rounded-sm min-h-[200px]">
        {activeTab === 1 && <div className="">
          <ul className='flex flex-col p-4 shadow-sm bg-gray-50 w-5/6 mx-auto space-y-4 mt-6'>
            {!allTasks.length ? <p className='text-xl font-bold text-center text-neutral-800'>There is no tasks to show</p> : allTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
              />
            ))}
          </ul>
        </div>}
        {activeTab === 2 && <div className="">
          <ul className='flex flex-col p-4 shadow-sm bg-gray-50 w-5/6 mx-auto space-y-4 mt-6'>
            {!completedTasks.length ? <p className='text-xl font-bold text-center text-neutral-800'>There is not completed tasks</p> : completedTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
              />
            ))}
          </ul>
        </div>}
        {activeTab === 3 && <div className="">
          <ul className='flex flex-col p-4 shadow-sm bg-gray-50 w-5/6 mx-auto space-y-4 mt-6'>
            {!activeTasks.length ? <p className='text-xl font-bold text-center text-neutral-800'>There is no completed tasks to show</p> : activeTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
              />
            ))}
          </ul>
        </div>}
      </div>
    </div>
  )
}

export default Tabs
