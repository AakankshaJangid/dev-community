import React from 'react';

const InputControl = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium text-base mt-3 ">{label}</label>}
      <input
        type="text"
        {...props}
        className=" text-indigo-900 font-serif font-medium border border-gray-400 outline-none bg-slate-100 rounded-md py-1 px-3 text-base  focus:ring focus:ring-blue-300"
      />
    </div>
  );
};

export default InputControl;
