import React, { useEffect, useState } from 'react';

const Input = () => {

    const [list , setList] = useState([]);
    const [task , setTask] = useState(false);
    useEffect(()=>{
        const url = "https://quiet-temple-50318.herokuapp.com/task";
        fetch(url)
        .then(res=> res.json()).then(data=>setList(data));
    },[task])
    

    const handlepost =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        console.log(name);
        e.input=""
        fetch("https://quiet-temple-50318.herokuapp.com/task " , {
            method: "POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({name}),
        }).then(res=>res.json()).then(data=>{
            console.log(data);
            
            setTask(!task);
        })


       







    }
    const handleDelete = (id) => {
        console.log(id);
      
        fetch(`https://quiet-temple-50318.herokuapp.com/task/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setTask(!task);
          });
      };

    return (
        <section className='grid grid-cols-1 mt-20 lg:grid-cols-2 justify-between gap-5 content-center'>

            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Daily Task</h2>
                    <form onSubmit={handlepost}>
                    <div className='flex gap-5'>
                    
                       <div className='w-5/6'>
                       
                       <input name='name' type="text" placeholder="Your Task Name" class="input input-bordered input-success w-full" />
                      
                       </div>
                       <div className='w-1/6'>
                       <button class="btn btn-small btn-primary">add</button>
                       </div>
                       
                    </div>
                    </form>
                </div>
            </div>
            <div class="card  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Task List</h2>
                    {
                        list.map(item=>(
                            <p className='text-3xl  text-secondary'><input type="radio" name="radio-3" class="radio text-xl radio-secondary"  />  {item.name}  <button class="btn btn-sm btn-primary">Edit</button>    <button onClick={() => handleDelete(item._id)} class="btn btn-sm btn-primary">delete</button>  </p>
                        ))
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Input;