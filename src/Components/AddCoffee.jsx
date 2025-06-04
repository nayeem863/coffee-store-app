import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const  handleAddCoffee = e =>{
     e.preventDefault();
     const form = e.target
     const formData = new FormData(form)
     const newCoffee = Object.fromEntries(formData.entries())
     console.log(newCoffee)

    //  send data to server
    fetch('http://localhost:3000/coffees',{
        method:'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            Swal.fire({
  title: "Coffee Added Successfully",
  icon: "success",
  draggable: true
});
        }
    })

    }
    return (
        <div className='p-24'>
            <div className='p-12 space-y-4'>
 <h1 className='text-6xl'>Add New Coffee</h1>
            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee} >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
 

  <label className="label">Name</label>
  <input type="text" name="name" className="input" placeholder="coffee name" />

 
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
 

  <label className="label">Quantity</label>
  <input type="text" name="quantity" className="input" placeholder="Quantity" />

 
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
 

  <label className="label">Supplier</label>
  <input type="text" name="supplier" className="input" placeholder="supplier name" />

 
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
 

  <label className="label">Taste</label>
  <input type="text" name="Taste" className="input" placeholder="taste name" />

 
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
 

  <label className="label">price</label>
  <input type="text" name="price" className="input" placeholder="price" />

 
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
 

  <label className="label">Details</label>
  <input type="text" name="details" className="input" placeholder="details name" />

 
</fieldset>
 
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6  border p-4">
 

  <label className="label">Photo</label>
  <input type="text" name="photo" className="input" placeholder="Photo Url" />

 
</fieldset>
<input className='btn w-full' type="submit" value="Add Coffee" />
            </form>
           
        </div>
    );
};

export default AddCoffee;