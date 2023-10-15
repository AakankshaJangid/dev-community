import React, { useState } from "react";

const ToDo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc, completed: false }]);
    setTitle("");
    setDesc("");
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

  let renderTask = <h2 className="text-xs text-red-500">No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="flex justify-between">
          <div className="flex justify-between gap-4 text-base">
            <h5 className={t.completed ? "line-through" : ""}>
              {t.title}
            </h5>
            <h6 className={t.completed ? "line-through" : ""}>
              {t.desc}
            </h6>
          </div>

          <div className="flex justify-between gap-4">
            <button onClick={() => toggleComplete(i)} className="bg-green-500 p-2 text-xs rounded-md">
              Complete
            </button>
            <button onClick={() => deleteHandler(i)} className="bg-red-500 p-2 text-xs rounded-md">
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <div className="bg-[#222831] p-4 flex flex-col gap-2 rounded-md shadow-md">
      <h1 className="">To-Do</h1>
      <form onSubmit={submitHandler} className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Enter task here"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="outline-none bg-transparent border-b-2 border-white"
          />
          <input
            type="text"
            placeholder="Enter time here"
            required
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="outline-none bg-transparent border-b-2 border-white"
          />
        </div>

        <button className="py-2 px-4 bg-white hover:bg-slate-200 font-semibold text-xs text-[#F96D00] rounded-sm">Add Task</button>
      </form>
      <div>
        <ul className="flex flex-col gap-2">{renderTask}</ul>
      </div>
    </div>
  );
};

export default ToDo;
