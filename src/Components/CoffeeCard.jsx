import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee ,coffees,setCoffees}) => {
    const {photo,name,price,quantity,_id}=coffee

     const handleDelete = (_id)=>{
      console.log(_id)
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  
  if (result.isConfirmed) {

    fetch(`http://localhost:3000/coffees/${_id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount){
        Swal.fire({
      title: "Deleted!",
      text: "Your coffee has been deleted.",
      icon: "success"

    
    });

    
      // remove coffee
      const remainingCoffees = coffees.filter(cof=>cof._id !== _id)
      setCoffees(remainingCoffees)
      }
     
    })

    
  }
});
     }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className="flex w-full justify-around mt-6">
   <div className='flex flex-col text-start'>
     <h2 className="">{name}</h2>
    <p>price:{price}</p>
    <p>quantity:{quantity}</p>
   </div>
    <div className="card-actions justify-end">
      <div className='join join-vertical gap-4 py-auto'>
       <Link to ={`/coffee/${_id}`} > <button className="btn btn-primary">View</button></Link>
       <Link to ={`/updateCoffee/${_id}`} > <button className="btn btn-primary">Edit</button></Link>
     
      <button onClick={()=>handleDelete(_id)} className="btn btn-primary">X</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeeCard;