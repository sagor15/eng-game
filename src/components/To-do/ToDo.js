import React, { useEffect, useState } from 'react';





const ToDo = () => {

    // <!-- The button to open modal -->

    

    const [list , setList] = useState([]);
    const [task , setTask] = useState(false);
    useEffect(()=>{
        const url = "https://quiet-temple-50318.herokuapp.com/task";
        fetch(url)
        .then(res=> res.json()).then(data=>setList(data));
    },[task])

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
        <div class="card-body  bg-base-100 shadow-xl">
            <h2 class="card-title">Task List</h2>
            {
                list.map(item=>(
                    <p className='text-3xl  text-secondary'><input type="radio" name="radio-3" class="radio text-xl radio-secondary"  />  {item.name}  <button class="btn btn-sm btn-primary" for="my-modal-3">Edit</button>   <button onClick={() => handleDelete(item._id)} class="btn btn-sm btn-primary">delete</button>  </p>
                ))
            }
            
        </div>
    
    );
};

export default ToDo;