// import React from "react";
// import ReactModal from "react-modal";

// // import Modal from "react-modal";

// // const customStyles = {
// //   content: {
// //     top: "50%",
// //     left: "50%",
// //     right: "auto",
// //     bottom: "auto",
// //     marginRight: "-50%",
// //     transform: "translate(-50%, -50%)",
// //   },
// // };

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#root");


// //don't worry its just a package for modal. just go and explore https://www.npmjs.com/package/react-modal

// export default function UpdateModal({ id, setIsReload, isReload }) {
//   let subtitle;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = "#f00";
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }


// const handleUpdate = (event) => {
//   event.preventDefault();
//   console.log("hello");
//   const name = event.target.name.value;
  

//   // console.log(userName, textData);
//   fetch(`https://quiet-temple-50318.herokuapp.com/task/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name}),
//   })
//     .then((res) => res.json())
//     .then((data) => setIsReload(!isReload));
// };

//   return (
//     <div>
//       <button onClick={openModal} className="color-801336 btn-sm btn">
//         {" "}
//         Update
//       </button>
//       <ReactModal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <button onClick={closeModal} className="btn btn-sm btn-warning">
//           close
//         </button>
//         <div>Please insert your text</div>
//         <div className=" p-3 color-4D4C7D">
//           <form className="container " onSubmit={handleUpdate}>
//             <div className="input-group mb-3 mt-5">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Your name"
//                 aria-label="Username"
//                 name="name"
//               />
//             </div>

//             <div class="card  bg-base-100 shadow-xl">
//                 <div class="card-body">
//                     <h2 class="card-title">Task List</h2>
//                     {
//                         list.map(item=>(
//                             <p className='text-3xl  text-secondary'><input type="radio" name="radio-3" class="radio text-xl radio-secondary"  />  {item.name}  <button class="btn btn-sm btn-primary">Edit</button>    <button onClick={() => handleDelete(item._id)} class="btn btn-sm btn-primary">delete</button>  </p>
//                         ))
//                     }
                    
//                 </div>
//             </div>

//             <div className="mt-4">
//               <input type="submit" value="submit" className="btn btn-info" />
//             </div>
//           </form>
//         </div>
//       </Modal>
//     </div>
//   );
// }