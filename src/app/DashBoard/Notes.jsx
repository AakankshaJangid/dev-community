import React from 'react'
import { useState } from 'react'
const Notes = () => {
    const[notes,setNotes]=useState([]);
    const[state,setState]=useState({
        title:"",
        note:"",
        id:Math.random()*10,
 });

 const handleDelete=(id)=>{
  const leftNotes=notes.filter(note=>note.id!==id)
  setNotes(leftNotes);
 }

 const handleChange=(e)=>{
    setState({...state,[e.target.name]:e.target.value});
 };
 const handleSubmit=(e)=>{
    e.preventDefault();
  setNotes([...notes,state]);
  setState(
    {
        title:"",
        note:"",
    } );
};
  return (
    <div className='relative left-80 ml-7 bottom-16'>
        <h1 className='text-center text-3xl p-5'>Notes</h1>
        <div className='flex flex-col items-center relative bottom-4'>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder='title'
                 name='title'
                  className='border-2 border-blue-300 p-2  text-black mt-4 mb-4 w-72 bg-gray-300'
                  onChange={handleChange}
                  value={state.title}
                  required
                  />
                <textarea name='note' id='' cols="30" rows="8" placeholder='note' className='border-2 border-blue-300 p-2  text-black w-72 bg-gray-300'  onChange={handleChange}  value={state.note}  required></textarea>
                <button type='submit' className='bg-blue-500 px-5 py-3 text-white mt-4 rounded w-32 relative left-20'>Add Note</button>
            </form>
        </div>
        <div className='border-t-2 border-blue-300 px-5 m-10 flex flex-wrap'>
            {/* notes container */}
           { 
           notes.length>0? notes.map((note,i)=>{
            return(
                <div className='bg-white mt-5 mr-5 w-{300px} p-4 relative text-black' key={i}> 
                {/* note */}
                <button className='absolute right-2 top-0 text-red-500 font-bold text-2xl' onClick={()=>handleDelete(note.id)}>
                    x</button>
                <h3 className='font-bold text-1xl pb-2'>{note.title}</h3>
                <p>{note.note}</p>
            </div>
            );
           })
        :<p>No Notes Available</p>
        }
        </div>
    </div>
  )
}

export default Notes