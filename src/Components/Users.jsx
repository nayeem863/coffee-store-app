import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initialUsers = useLoaderData();
    const [users,setUsers]=useState(initialUsers)

    const handleEdit = (id) => {
        console.log('Edit user with ID:', id);
        // Add your edit logic or navigation here
    };

    const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
          if (data.deletedCount) {
            const remainingUsers = users.filter(user=>user._id !== id)
            setUsers(remainingUsers)
            Swal.fire({
              title: "Deleted!",
              text: "The user has been deleted.",
              icon: "success",
            });
          }
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
          Swal.fire("Error!", "Could not delete user.", "error");
        });
    }
  }); // ✅ closes Swal.then
};     // ✅ closes handleDelete


    const handleDetails = (id) => {
        console.log('Show details for user with ID:', id);
        // Add your detail view logic or navigation here
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-10 px-4">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">User Table</h1>

            <div className="overflow-x-auto max-w-5xl mx-auto shadow-xl rounded-2xl border border-gray-200 bg-white">
                <table className="min-w-full divide-y divide-purple-200 text-sm">
    <thead className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-left">
        <tr>
            <th className="px-6 py-3 font-semibold">Photo</th>
            <th className="px-6 py-3 font-semibold">Name</th>
            <th className="px-6 py-3 font-semibold">Phone</th>
            <th className="px-6 py-3 font-semibold">Email</th>
            <th className="px-6 py-3 font-semibold text-center">Actions</th>
        </tr>
    </thead>
    <tbody className="divide-y divide-gray-100">
        {users.map((user) => (
            <tr key={user._id} className="hover:bg-purple-50 transition duration-200">
                <td className="px-6 py-4">
                    <img
                        src={user.photo}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover border border-purple-300"
                    />
                </td>
                <td className="px-6 py-4 font-medium text-gray-800">{user.name}</td>
                <td className="px-6 py-4 text-gray-600">{user.phone}</td>
                <td className="px-6 py-4 text-gray-600">{user.email}</td>
                <td className="px-6 py-4 text-center space-x-2">
                                    <button
                                        onClick={() => handleEdit(user._id)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleDetails(user._id)}
                                        className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
                                    >
                                        Details
                                    </button>
                                    </td>
            </tr>
            
        ))}
    </tbody>
</table>
            </div>
        </div>
    );
};


export default Users;
