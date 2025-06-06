import React, { use } from 'react';
import { AuthContext } from './Context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const SignUp = () => {
  const {createUser}=use(AuthContext)
  const handleSignUp =(e)=>{
    e.preventDefault()
     const form = e.target;
     const formData = new FormData(form);
     const {email,password, ...rest} = Object.fromEntries(formData.entries())
    

    //  const email = formData.get('email')
    //  const password = formData.get('password')
    
     createUser(email,password)
     .then(result=>{
      console.log(result.user)
       const userProfile = {
      email,
      ...rest,
      creationTime: result.user.metadata?.creationTime,
      lastSignInTime: result.user.metadata?.lastSignInTime,
     }
    
     fetch('http://localhost:3000/users',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(userProfile)
     })
     .then(res=>res.json())
     .then(data=>{
      if(data.insertedId){
      toast.success('added user successfully')
      }
     })
     


     })
     .catch(error=>{
      console.log(error)
     })

     
  }
    return (
   
    <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">SignUp now!</h1>
        <form onSubmit={handleSignUp} className="form">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
          <label className="label">Address</label>
          <input type="text" name='address' className="input" placeholder="Address" />
          <label className="label">Phone</label>
          <input type="text" name='phone' className="input" placeholder="Phone" />
          <label className="label">photo</label>
          <input type="text" name='photo' className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">SignUp</button>
          <ToastContainer></ToastContainer>
        </form>
      </div>
    </div>

    );
};

export default SignUp;