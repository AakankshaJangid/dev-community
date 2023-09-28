import React, { useState } from 'react';
import Image from 'next/image';
const ToDo = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc, completed: false }]); // Initialize completed to false
    setTitle('');
    setDesc('');
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  const toggleComplete = (i) => {
    let copyTask = [...mainTask];
    copyTask[i].completed = !copyTask[i].completed;
    setMainTask(copyTask);
  };

  let renderTask = <h2 className='text-xl font-semibold ml-8'>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li  className='flex mb-5 bg-gray-400  border-4 rounded-lg border-gray-500' >
           <div className='flex relative left-8 top-4'>
           <h5 className={`text-xl font-semibold  ${t.completed ? 'line-through' : ''}`}>{t.title}</h5>
            <h6 className={`text-xl font-semibold relative left-24  ${t.completed ? 'line-through' : ''}`}>{t.desc}</h6>
           </div>
        
          <div className='relative left-64'>
            <button
              onClick={() => toggleComplete(i)}
              className={`bg-red-500 text-white rounded-lg font-bold px-4 py-2 m-4   ${t.completed ? 'hidden' : ''}`}
            >
              <Image
               src='/check-fill.png'
               height={10}
               width={20}
               alt='Complete'
              />

        </button>
            <button
              onClick={() => toggleComplete(i)}
              className={`bg-green-500 text-black rounded-lg font-bold px-4 py-2 m-4 ${t.completed ? '' : 'hidden'}`}
            >
             <Image
               src='/check-fill.png'
               height={10}
               width={20}
               alt='Complete'
              /> 
            </button>
            <button
              onClick={() => {
                deleteHandler(i);
              }}
              className='bg-white rounded-lg font-bold px-4 py-2 m-4'
            >
                <Image
               src='/delete-bin.png'
               height={10}
               width={20}
               alt='Delete'
              />
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <div className='bg-gray-300 h-96 w-2/4 relative left-80 bottom-12 rounded-xl px-6 overflow-y-auto'>
      <h1 className=' text-black  py-1 text-3xl font-bold text-center rounded-lg w-64 relative top-2 left-44  mb-2'>
        To-Do
      </h1>
      <form onSubmit={submitHandler}>
       <div className='flex flex-col'>
       <input
          type='text'
          className='text-2xl bg-gray-300 border-collapse mt-5 px-1 py-1 text-black relative left-2 focus:outline-none'
          placeholder='Enter task here'
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type='text'
          className='text-2xl bg-gray-300 border-collapse mt-5 ml-2 px-1 py-1 text-black focus:outline-none'
          placeholder='Enter time here'
          required
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          />
       </div>
       
        <button className='bg-blue-800 text-white font-bold px-4 py-2 rounded relative left-64 top-2'>Add Task</button>
      </form>
      <div className=' text-black  relative top-4 mb-2'>
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
};

export default ToDo;
