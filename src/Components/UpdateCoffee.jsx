import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffees = useLoaderData()
    console.log(coffees)
    const {photo,name ,quantity,price,supplier,details,taste,_id} = coffees
    const handleUpdateCoffee=e=>{
        e.preventDefault()
      const form = e.target;
      const formData = new FormData(form)
      const UpdateCoffee = Object.fromEntries(formData.entries())
         fetch(`http://localhost:3000/coffees/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(UpdateCoffee)
    }).then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});

            console.log("after update",data)
            
        }
    })
    }
    return (
      <div className='p-24'>
            <div className='p-12 space-y-4'>
 <h1 className='text-6xl'>Update coffee</h1>
            
            </div>
            <form onSubmit={handleUpdateCoffee} >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
 

  <label className="label">Name</label>
  <input type="text" name="name" defaultValue={name} className="input" placeholder="coffee name" />

 
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
 

  <label className="label">Quantity</label>
  <input type="text" name="quantity" defaultValue={quantity} className="input" placeholder="Quantity" />

 
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
 

  <label className="label">Supplier</label>
  <input type="text" name="supplier"  defaultValue={supplier} className="input" placeholder="supplier name" />

 
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
 

  <label className="label">Taste</label>
  <input type="text" name="Taste" defaultValue={taste} className="input" placeholder="taste name" />

 
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
 

  <label className="label">price</label>
  <input type="text" name="price" defaultValue={price} className="input" placeholder="price" />

 
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
 

  <label className="label">Details</label>
  <input type="text" name="details" defaultValue={details} className="input" placeholder="details name" />

 
</fieldset>
 
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6  border p-4">
 

  <label className="label">Photo</label>
  <input type="text" name="photo" defaultValue={photo} className="input" placeholder="Photo Url" />

 
</fieldset>
<input className='btn w-full' type="submit" value="Update Coffee" />
            </form>
           
        </div>
    );
};

export default UpdateCoffee;