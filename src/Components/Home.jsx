import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(Array.isArray(initialCoffees) ? initialCoffees : []);

    console.log(coffees)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {
               coffees.map(coffee=><CoffeeCard coffees = {coffees} setCoffees = {setCoffees} key={coffee._id} coffee={coffee}></CoffeeCard>)
            }
        </div>
    );
};

export default Home;